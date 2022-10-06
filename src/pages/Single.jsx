import React from "react";
import { Link } from "react-router-dom";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/1336858/pexels-photo-1336858.jpeg?auto=compress&crop=focalpoint&cs=tinysrgb&dpr=1&fit=crop&h=700&w=1200"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/users/avatars/5079840/nnk-nida-199.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Duis ullamco ullamco esse esse Anim aliquip irure fugiat.</h1>
        <p>
          Incididunt tempor irure anim adipisicing. Dolor adipisicing magna eu
          mollit. Cupidatat culpa ex adipisicing laborum dolor. Nulla minim
          ullamco magna adipisicing ullamco esse qui cillum nisi dolore commodo
          culpa. Veniam ex proident tempor sunt occaecat velit in qui incididunt
          dolor amet sint est.
          <br />
          Deserunt incididunt Lorem veniam anim laborum proident adipisicing.
          Tempor quis sint amet sunt Lorem aute occaecat amet do nisi. Sit et
          sit est id laboris eu commodo sit enim ullamco commodo enim ad.
          Adipisicing est non occaecat nulla quis.
          <br />
          <br />
          Adipisicing quis proident qui voluptate consectetur Lorem excepteur
          aliquip reprehenderit aliqua sint. Et aliqua ea culpa minim deserunt
          ea sint Lorem consectetur. Incididunt in tempor id id proident anim
          pariatur et eiusmod consectetur ex. Veniam commodo est ullamco
          consequat velit proident esse ipsum duis culpa irure nisi. Mollit
          officia cillum sunt est magna do. Enim qui magna nisi elit occaecat.
          Culpa anim fugiat ex labore.
          <br />
          Lorem sit pariatur anim ea pariatur ex do nostrud ad. Sit excepteur ea
          consectetur ex. Dolor enim laboris ex adipisicing. Esse duis velit
          mollit qui nisi minim.
          <br />
          Laboris minim sit id dolor et anim aliquip proident laboris. Do cillum
          dolore excepteur laboris id. Dolor aute aute excepteur quis ex.
          Incididunt enim dolor laboris in et incididunt.
          <br />
          <br />
          Qui dolore aliquip incididunt do in. Enim ut non excepteur quis et
          dolor. Amet sit cillum amet cillum et culpa laboris commodo laboris
          reprehenderit voluptate et Lorem. Magna cupidatat mollit ex aute est
          laborum. Sit eiusmod aliqua nostrud labore cillum consectetur enim.
          Veniam voluptate occaecat quis et occaecat id nulla nisi qui nulla
          cillum cillum minim dolor.
          <br />
          Pariatur aliqua tempor enim cillum do est. Ut fugiat pariatur quis qui
          duis mollit consequat ex labore consequat eu voluptate in nisi. In
          pariatur esse occaecat deserunt sint. Veniam magna proident
          reprehenderit qui mollit mollit pariatur. Qui nostrud deserunt
          proident do in id cupidatat. Aliqua non proident Lorem ullamco qui ad.
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
