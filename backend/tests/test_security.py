"""
Tests for Security utilities.

Validates:
- Password hashing and verification
- JWT creation and decoding
- JWT with tampered/expired tokens raises AuthenticationError
"""

from __future__ import annotations

import pytest

from app.core.exceptions import AuthenticationError
from app.core.security import (
    create_access_token,
    decode_access_token,
    hash_password,
    verify_password,
)


class TestPasswordHashing:
    """Tests for password hash/verify utilities."""

    def test_hash_returns_non_empty_string(self) -> None:
        hashed = hash_password("MyS3cretP@ss!")
        assert isinstance(hashed, str)
        assert len(hashed) > 0

    def test_hash_is_not_plaintext(self) -> None:
        plain = "MyS3cretP@ss!"
        hashed = hash_password(plain)
        assert hashed != plain

    def test_verify_correct_password_returns_true(self) -> None:
        plain = "CorrectHorseBatteryStaple"
        hashed = hash_password(plain)
        assert verify_password(plain, hashed) is True

    def test_verify_wrong_password_returns_false(self) -> None:
        hashed = hash_password("OriginalPassword")
        assert verify_password("WrongPassword", hashed) is False

    def test_two_hashes_of_same_password_differ(self) -> None:
        """Hashing is salted — two hashes of the same password should differ."""
        plain = "SamePassword"
        h1 = hash_password(plain)
        h2 = hash_password(plain)
        assert h1 != h2

    def test_both_hashes_verify_correctly(self) -> None:
        plain = "SamePassword"
        h1 = hash_password(plain)
        h2 = hash_password(plain)
        assert verify_password(plain, h1) is True
        assert verify_password(plain, h2) is True


class TestJWT:
    """Tests for JWT creation and decoding."""

    def test_create_access_token_returns_string(self) -> None:
        token = create_access_token(subject="user-uuid-123", role="ADMIN")
        assert isinstance(token, str)
        assert len(token) > 0

    def test_decode_valid_token_returns_payload(self) -> None:
        token = create_access_token(subject="user-uuid-123", role="LOGISTICS_PLANNER")
        payload = decode_access_token(token)
        assert payload["sub"] == "user-uuid-123"
        assert payload["role"] == "LOGISTICS_PLANNER"
        assert payload["type"] == "access"

    def test_tampered_token_raises_auth_error(self) -> None:
        token = create_access_token(subject="user-uuid-456", role="ADMIN")
        # Corrupt the signature portion
        tampered = token[:-5] + "XXXXX"
        with pytest.raises(AuthenticationError):
            decode_access_token(tampered)

    def test_invalid_string_raises_auth_error(self) -> None:
        with pytest.raises(AuthenticationError):
            decode_access_token("this.is.not.a.jwt")

    def test_extra_claims_included_in_payload(self) -> None:
        token = create_access_token(
            subject="user-uuid-789",
            role="DATA_ANALYST",
            extra_claims={"custom_key": "custom_value"},
        )
        payload = decode_access_token(token)
        assert payload["custom_key"] == "custom_value"

    def test_all_required_claims_present(self) -> None:
        token = create_access_token(subject="user-uuid-000", role="COMMAND_VIEWER")
        payload = decode_access_token(token)
        for claim in ("sub", "role", "exp", "iat", "type"):
            assert claim in payload, f"Missing claim: {claim}"
