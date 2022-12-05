import React, { useRef, useState } from "react";
import moment from "moment-timezone";
import "moment/locale/ko";

export default function MomentExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (event) => {
    setDay(moment(event.target.value, "YYYY-MM-DD").format("dddd"));
  };

  const momentDate = moment();
  const newMomentdate = momentDate.add(1, "week");
  const cloneNewMomentDate = newMomentdate.clone().add(1, "week");
  return (
    <div>
      <h1>Moment</h1>
      <div>Immutable Check</div>
      <div>
        {momentDate.format()}
        <br />
        {newMomentdate.format()}
        <br />
        {cloneNewMomentDate.format()}
      </div>
      <br />
      <div>Leap year korea</div>
      <div>
        2017년 1월 1일 1년 빼기:
        {moment("2017-01-01").subtract(1, "year").format()}
      </div>
      <br />
      <div>
        2017년 1월 1일 365 빼기:
        {moment("2017-01-01").subtract(365, "day").format()}
      </div>
      <br />
      <div>
        한국어로 표기 하기 07-17-2021을 2021 7월 7일로 표기
        {moment("07-17-2021").format("YYYY M월 D일")}
      </div>
      <br />
      <div> 자기 생일 요일 찾기 </div>
      <div>
        <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
        <div>무슨 요일이였을까?</div>
        <div>{day}</div>
      </div>
      <br />
      <div>두 날짜 비교</div>
      <div>2021-07-17 03:00 와 2021-07-18 02:00은 몇시간 차이인가?</div>
      <div>
        {moment("2021-07-17 03:00").diff(moment("2021-07-18 02:00"), "hours")}
      </div>
    </div>
  );
}
