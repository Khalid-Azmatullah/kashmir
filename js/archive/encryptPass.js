const crypto = require('crypto');

function encryptPassword(password, secretKey) {
  const iv = crypto.randomBytes(16); // Generate a random initialization vector
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(secretKey, 'hex'), iv);
  let encrypted = cipher.update(password, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  // Return the IV and encrypted password together for decryption
  return iv.toString('hex') + ':' + encrypted;
}
