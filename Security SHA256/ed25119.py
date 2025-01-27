import nacl.signing
import nacl.encoding

def hash_with_ed25519(message):
    # Generate a new random signing key
    signing_key = nacl.signing.SigningKey.generate()

    # Get the verifying key for the signing key
    verify_key = signing_key.verify_key

    # Sign the message
    signed = signing_key.sign(message.encode('utf-8'))

    # Return the hexadecimal representation of the hash
    return signed.signature.hex()

# Example usage
message = "Hello, Blockchain!"
hashed_message = hash_with_ed25519(message)
print(f"The hash of the message is: {hashed_message}")
