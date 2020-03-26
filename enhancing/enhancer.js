module.exports = {
  succeed,
  fail,
  repair,
  get,
};

  // name
  // durability 0 - 100
  // enhancement 0 - 20

function succeed(item) {
  const {enhancement} = item
  if (enhancement <= 19){
    return {
      ...item,
      enhancement: enhancement + 1}
  } else
  return { ...item };
}

function fail(item) {
  const {durability, enhancement} = item
  if (enhancement < 15){
    return {
      ...item,
      durability: durability - 5}
  } else if (enhancement > 16){
    return {
      ...item,
      durability: durability - 1}
  } else if (enhancement >= 15){
    return {
      ...item,
      durability: durability - 10}
  } else
  return { ...item };
}

function repair(item) {
  if (item.durability <= 100){
    return {
      ...item,
    durability: 100
    }
  };
  return item
}

function get(item) {
  return { ...item };
}
