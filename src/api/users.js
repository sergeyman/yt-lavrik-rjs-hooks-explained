function all() {
  return emulateRequest().then(() => {
    return users.map((user) => {
      return { id: user.id, name: user.name };
    });
  });
}

function get(id) {
  return emulateRequest().then(() => {
    let num = users.findIndex((user) => user.id === id);
    return num === -1 ? null : users[num];
  });
}

export { all, get };

let users = [
  {
    id: 1,
    name: "User 1",
    desc: "User  1 desc",
    age: 21
  },
  {
    id: 2,
    name: "User 2",
    desc: "User  2 desc",
    age: 22
  },
  {
    id: 3,
    name: "User 3",
    desc: "User  3 desc",
    age: 23
  }
];
function emulateRequest(timeout = 200) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, timeout);
  });
}
