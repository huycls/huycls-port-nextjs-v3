"use client";

import { motion } from "motion/react";
import Image from "next/image";
import LineGrown from "./components/atoms/LineGrown";
import Menu from "./components/molecules/Menu";
import LoadingScreen from "./components/atoms/LoadingScreen";
import CardSwap, { Card } from "./components/molecules/CardSwap";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <div className="relative pl-40 min-h-screen bg-linear-to-r from-black to-[#006154] font-sans ">
        <Menu className="absolute bottom-40 w-fit left-10" />
        <main className="overflow-x-hidden">
          <div className="h-screen relative w-full">
            <LineGrown className="absolute animationGrownLeft top-16 h-px -left-40 w-[90vw]" />
            <div className="block pr-10 py-40 h-full">
              <div className="flex text-white h-full w-full justify-between">
                <div className="w-2/5">
                  <h1 className="text-4xl font-semibold mb-6">
                    Lorem ipsum dolor sit amet
                  </h1>
                  <p>
                    Nulla consectetur mollis mi, in bibendum lorem suscipit
                    quis. Morbi semper, eros suscipit dignissim mattis, libero
                    arcu lobortis mi, cursus molestie nibh nunc vitae dolor.
                    Donec eleifend convallis facilisis. Nunc vulputate est non
                    lacus ornare, nec pretium mi sollicitudin. Praesent a orci
                    eros. Maecenas eleifend luctus diam eu rutrum. Pellentesque
                    molestie nulla id lorem sollicitudin, sit amet tincidunt
                    diam fringilla. Morbi dictum congue ornare. Aliquam lacinia
                    eros aliquam posuere euismod.{" "}
                  </p>
                </div>
                <div className="w-1/2 flex items-center justify-end">
                  <div style={{ height: "600px", position: "relative" }}>
                    <CardSwap
                      cardDistance={60}
                      verticalDistance={70}
                      delay={5000}
                      pauseOnHover={false}>
                      <Card>
                        <img
                          src="/assets/images/safari-view.png"
                          alt="safari-view"
                          className="w-full h-full object-top object-cover"
                        />
                      </Card>
                      <Card>
                        <img
                          src="/assets/images/web-development-1.jpg"
                          alt="web-development-1"
                          className="w-full h-full object-cover"
                        />
                      </Card>
                      <Card>
                        <img
                          src="/assets/images/safari-view-2.png"
                          alt="safari-view2"
                          className="w-full h-full object-cover"
                        />
                      </Card>
                    </CardSwap>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
