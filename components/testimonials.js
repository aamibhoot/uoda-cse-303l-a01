import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum.
              Dignissim cras tincidunt lobortis feugiat vivamus at augue eget.
              Rhoncus mattis rhoncus urna neque viverra justo nec ultrices.{" "}
              <Mark>Faucibus</Mark> ornare suspendisse sed nisi lacus sed
              viverra tellus in.
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="Sales at Nothing"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Bibendum arcu vitae elementum curabitur. Donec et odio
              pellentesque diam volutpat commodo sed. Dictum varius duis at{" "}
              <Mark>consectetur</Mark> lorem donec massa sapien faucibus. Mi
              eget mauris pharetra et ultrices neque ornare aenean euismod.
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Lead marketer at Sleep"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Etiam erat velit scelerisque in dictum non consectetur a erat. In
              ornare quam viverra orci sagittis. Odio ut sem nulla
              <Mark>pharetra diam</Mark> sit. Duis ultricies lacus sed turpis
              tincidunt id aliquet.
            </p>

            <Avatar
              image={userThreeImg}
              name="Cecile Nambooze"
              title="Co-founder of Nothing"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
