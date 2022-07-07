/* eslint-disable no-unused-vars */
function mapQuest(directions) {
  const oppositeDirection = { N: "S", S: "N", E: "W", W: "E" };

  return directions.reduce((newDirection, dir) => {
    if (newDirection[newDirection.length - 1] === oppositeDirection[dir]) {
      newDirection.pop();
    } else {
      newDirection.push(dir);
    }
    return newDirection;
  }, []);
}
