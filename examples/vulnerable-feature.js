// Test feature containing common AI-generated security flaws
const apiKey = "sk-proj-DEMOTESTINGKEY1234567890abcdefghijklmnopqrstuvwxyz";

function executeUserInput(input) {
  // AI generated dynamic execution flaw
  return eval(input);
}

function getUser(db, userId) {
  // AI generated raw SQL interpolation
  return db.query(`SELECT * FROM users WHERE id = ${userId}`);
}

module.exports = { executeUserInput, getUser };
