const crypto = require('crypto');

function decryptPassword(encryptedPassword, secretKey) {
  const parts = encryptedPassword.split(':');
  const iv = Buffer.from(parts.shift(), 'hex'); // Extract the IV
  const encryptedText = Buffer.from(parts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(secretKey, 'hex'), iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
