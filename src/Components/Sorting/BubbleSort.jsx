import React, { useEffect, useState } from "react";
import NavbarPages from "../Templates/NavbarPages";
import "../../index.css";

const BubbleSort = () => {
  const [array, setarray] = useState([3, 10, 60, 30, 5]);
  const [maxval, setmaxval] = useState(Math.max(...array));
  const [isSorting, setisSorting] = useState(false);
  console.log(maxval);

  const createRandomArray = () => {
    if (isSorting) return;
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(Math.floor(Math.random() * 100));
    }
    setarray(arr);
    setmaxval(Math.max(...array));
  };

  const bubbleSrotVisualization = () => {};

  useEffect(() => {}, [array, maxval]);

  return (
    <main className="w-full flex flex-col">
      <NavbarPages />

      {/* 1 st secttion  */}
      <section className="w-hull h-[120] flex flex-col pt-5 border-b-[1px] border-black ">
        {/* heading div  */}
        <div className="w-full h-[10vh] border-[1px] flex items-center px-10 border-black">
          <h1 className="heading text-4xl tracking-wider">
            Sorting : Bubble Sort
          </h1>
        </div>

        {/* learn div container */}

        <div className="flex h-[110vh] w-full ">
          {/* left cont  */}
          <div className="flex h-full w-[25%] justify-center border-black border-r-[1px] ">
            <div className="flex w-[80%] h-[20%]  gap-4 items-center justify-center ">
              {/* circle  */}
              <div className="rounded-full w-[22px] h-[16px]   border-black border-[1px]"></div>
              <h1 className="heading text-4xl">Learn</h1>
            </div>
          </div>

          {/* right cont  */}

          <div className="flex flex-col h-full w-[75%]  ">
            {/* overview cont  */}
            <div className="flex flex-col h-[55%] w-full  border-black border-b-[1px] py-7 px-14">
              <h2 className="text-2xl font-bold mt-5">Overview</h2>
              {/* / */}
              <p className="mt-5 ml-3 text-lg">
                Bubble Sort is the simplest sorting algorithm that works by
                repeatedly swapping the adjacent elements if they are in the
                wrong order. This algorithm is not suitable for large data sets
                as its average and worst-case time complexity are quite high.
              </p>
              {/* / */}
              <ul className="mt-3 ml-8 list-disc w-[90%] flex flex-col gap-4 text-lg ">
                <li>
                  We sort the array using multiple passes. After the first pass,
                  the maximum element goes to end (its correct position). Same
                  way, after second pass, the second largest element goes to
                  second last position and so on.
                </li>
                <li>
                  In every pass, we process only those elements that have
                  already not moved to correct position. After k passes, the
                  largest k elements must have been moved to the last k
                  positions.
                </li>
                <li>
                  In a pass, we consider remaining elements and compare all
                  adjacent and swap if larger element is before a smaller
                  element. If we keep doing this, we get the largest (among the
                  remaining elements) at its correct position.
                </li>
              </ul>
              {/* / */}
            </div>
            {/* // */}

            {/* algorithm cont  */}
            <div className="flex w-full h-[45%]  ">
              {/* algorithm  */}
              <div className="flex w-[35%] h-full  border-black border-r-[1px] flex-col p-6 pt-10 ">
                <h1 className="text-2xl font-bold">Algorithm</h1>
                <p className="text-xl mt-5 ml-4 ">
                  BubbleSort(arr): <br /> n = length of arr for i from 0 to n-1:{" "}
                  <br /> for j from 0 to n-i-2: <br /> if arr[j] > arr[j+1]:{" "}
                  <br /> Swap arr[j] and arr[j+1]
                </p>
              </div>
              {/* / */}
              {/* steps  */}
              <div className="flex w-[65%] h-full flex-col p-5">
                <h2 className="text-2xl font-bold">Steps</h2>
                <ul className="mt-5 w-[96%] list-disc px-5 text-[1.1em]">
                  <li>Start with an unsorted list of elements.</li>
                  <li>Compare each pair of adjacent elements in the list.</li>
                  <li>
                    If the first element is greater than the second, swap them
                    so the larger element moves towards the end.
                  </li>
                  <li>
                    Repeat this process for the entire list. After the first
                    pass, the largest element will be in its correct position at
                    the end of the list.
                  </li>
                  <li>
                    Ignore the last sorted element in subsequent passes since it
                    is already in the correct place.
                  </li>
                  <li>
                    Continue this process until no swaps are needed, indicating
                    that the list is fully sorted.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* /// */}
        </div>
      </section>
      {/* //// */}

      {/* 2section  */}

      <section className="flex w-full h-screen border-black border-b-[1px]">
        {/* left cont  */}
        <div className="flex h-full w-[25%] justify-center border-black border-r-[1px] ">
          <div className="flex w-[80%] h-[20%]  gap-4 items-center justify-center ">
            {/* circle  */}
            <div className="rounded-full w-[22px] h-[16px]   border-black border-[1px]"></div>
            <h1 className="heading text-4xl">Visualize</h1>
          </div>
        </div>

        {/* //*/}
        {/* right cont  */}
        <div className="flex flex-col w-[75%] h-full  ">
          {/* visualizer array cont  */}
          <div className="flex h-[50%] items-end justify-center  ">
            <div className="w-[94%] h-[94%]  border-black border-[1px] flex relative  justify-center gap-4">
              {/* srting heading  */}
              <h1 className="absolute heading top-3 left-5 text-xl">
                Bubble sort
              </h1>

              {/* start button  */}
              <button className="absolute px-10 pt-3 py-2 rounded-full heading border-black border-[1px] font-bold tracking-widest text-xl bottom-6 right-[13%]">
                Start
              </button>
              {/* // */}

              <div className="flex h-[80%] items-end  gap-5">
                {array.map((e, i) => {
                  return (
                    <div
                      className={`bars bg-sky-400 flex justify-center items-end w-[2.2em]  `}
                      style={{ height: `${(e / maxval) * 70}%` }}
                      key={i}
                    >
                      {e}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* // */}

          {/* options and steps cont  */}

          <div className="flex h-[50%] w-full ">
            {/* left options cont  */}
            <div className="h-full w-[50%] border-black border-r-[1px] flex flex-col justify-center gap-10">
              {/* 1 */}
              <div className="flex w-full flex-col items-center gap-6">
                <h3 className="text-xl font-bold">Create New Array</h3>
                <div className="w-full flex justify-center gap-6">
                  <button className="px-5 py-2  border-black border-[1px]">
                    Coustom Array
                  </button>
                  {/* random btn */}
                  <button
                    onClick={() => createRandomArray()}
                    className="px-5 py-2  border-black border-[1px]"
                  >
                    Random Array
                  </button>
                </div>
              </div>

              {/* 2nd  */}

              <div className="flex w-full flex-col items-center gap-6">
                <h3 className="text-xl font-bold">Sorting Order</h3>
                <div className="w-full flex justify-center gap-6">
                  <button className="px-5 py-2  border-black border-[1px]">
                    Increseing Order
                  </button>
                  <button className="px-5 py-2  border-black border-[1px]">
                    Decresing Order
                  </button>
                </div>
              </div>
            </div>

            {/* // */}
            {/* right steps cont  */}
            <div className="h-full w-[50%] flex flex-col items-center justify-center gap-5 ">
              <h3 className="w-[85%] text-xl font-bold">Working Steps</h3>
              <div className="steps flex flex-col w-[80%] h-[70%] border-black border-[1px] overflow-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* //// */}

      {/* 3section  */}

      <section className="flex w-full h-screen border-black border-b-[1px]">
        {/* left cont  */}
        <div className="flex h-full w-[25%] justify-center border-black border-r-[1px] ">
          <div className="flex w-[80%] h-[20%]  gap-4 items-center justify-center ">
            {/* circle  */}
            <div className="rounded-full w-[22px] h-[16px]   border-black border-[1px]"></div>
            <h1 className="heading text-4xl">Code</h1>
          </div>
        </div>

        {/* //*/}
        {/* right cont  */}
        <div className="flex flex-col w-[75%] h-full  "></div>
      </section>
    </main>
  );
};

export default BubbleSort;
