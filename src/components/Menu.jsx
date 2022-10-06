import React from "react";
const posts = [
  {
    id: 1,
    title:
      "Lorem Consequat aliquip occaecat officia laboris voluptate officia anim in irure ea est et commodo.",
    desc: "Et sunt nisi nulla voluptate commodo enim nostrud ipsum ad dolor officia incididunt tempor occaecat. Reprehenderit pariatur fugiat laboris elit anim labore labore. Officia qui adipisicing in esse cillum laboris. Anim velit quis nostrud consequat ea labore. Laborum aute enim culpa dolore consequat. Pariatur sint ex fugiat enim officia aute nulla cillum cillum aute commodo.",
    img: "https://images.pexels.com/photos/13709301/pexels-photo-13709301.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    title:
      "Lorem Consequat aliquip occaecat officia laboris voluptate officia anim in irure ea est et commodo.",
    desc: "Et sunt nisi nulla voluptate commodo enim nostrud ipsum ad dolor officia incididunt tempor occaecat. Reprehenderit pariatur fugiat laboris elit anim labore labore. Officia qui adipisicing in esse cillum laboris. Anim velit quis nostrud consequat ea labore. Laborum aute enim culpa dolore consequat. Pariatur sint ex fugiat enim officia aute nulla cillum cillum aute commodo.",
    img: "https://images.pexels.com/photos/13350849/pexels-photo-13350849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    title:
      "Lorem Consequat aliquip occaecat officia laboris voluptate officia anim in irure ea est et commodo.",
    desc: "Et sunt nisi nulla voluptate commodo enim nostrud ipsum ad dolor officia incididunt tempor occaecat. Reprehenderit pariatur fugiat laboris elit anim labore labore. Officia qui adipisicing in esse cillum laboris. Anim velit quis nostrud consequat ea labore. Laborum aute enim culpa dolore consequat. Pariatur sint ex fugiat enim officia aute nulla cillum cillum aute commodo.",
    img: "https://images.pexels.com/photos/13813443/pexels-photo-13813443.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    title:
      "Lorem Consequat aliquip occaecat officia laboris voluptate officia anim in irure ea est et commodo.",
    desc: "Et sunt nisi nulla voluptate commodo enim nostrud ipsum ad dolor officia incididunt tempor occaecat. Reprehenderit pariatur fugiat laboris elit anim labore labore. Officia qui adipisicing in esse cillum laboris. Anim velit quis nostrud consequat ea labore. Laborum aute enim culpa dolore consequat. Pariatur sint ex fugiat enim officia aute nulla cillum cillum aute commodo.",
    img: "https://images.pexels.com/photos/12776538/pexels-photo-12776538.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 5,
    title:
      "Lorem Consequat aliquip occaecat officia laboris voluptate officia anim in irure ea est et commodo.",
    desc: "Et sunt nisi nulla voluptate commodo enim nostrud ipsum ad dolor officia incididunt tempor occaecat. Reprehenderit pariatur fugiat laboris elit anim labore labore. Officia qui adipisicing in esse cillum laboris. Anim velit quis nostrud consequat ea labore. Laborum aute enim culpa dolore consequat. Pariatur sint ex fugiat enim officia aute nulla cillum cillum aute commodo.",
    img: "https://images.pexels.com/photos/5706259/pexels-photo-5706259.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 6,
    title:
      "Lorem Consequat aliquip occaecat officia laboris voluptate officia anim in irure ea est et commodo.",
    desc: "Et sunt nisi nulla voluptate commodo enim nostrud ipsum ad dolor officia incididunt tempor occaecat. Reprehenderit pariatur fugiat laboris elit anim labore labore. Officia qui adipisicing in esse cillum laboris. Anim velit quis nostrud consequat ea labore. Laborum aute enim culpa dolore consequat. Pariatur sint ex fugiat enim officia aute nulla cillum cillum aute commodo.",
    img: "https://images.pexels.com/photos/13869204/pexels-photo-13869204.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 7,
    title:
      "Lorem Consequat aliquip occaecat officia laboris voluptate officia anim in irure ea est et commodo.",
    desc: "Et sunt nisi nulla voluptate commodo enim nostrud ipsum ad dolor officia incididunt tempor occaecat. Reprehenderit pariatur fugiat laboris elit anim labore labore. Officia qui adipisicing in esse cillum laboris. Anim velit quis nostrud consequat ea labore. Laborum aute enim culpa dolore consequat. Pariatur sint ex fugiat enim officia aute nulla cillum cillum aute commodo.",
    img: "https://images.pexels.com/photos/13771253/pexels-photo-13771253.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

function Menu() {
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
