import React, { useRef, useState } from "react";
import moment from "moment-timezone";
import "moment/locale/ko";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
//locale 설정
dayjs.locale("ko");
dayjs.extend(utc);
dayjs.extend(timezone);

export default function MomentExample() {
  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (event) => {
    setDay(dayjs(event.target.value, "YYYY-MM-DD").format("dddd"));
  };

  const dayjsDate = dayjs();
  const newDayjsdate = dayjsDate.add(1, "week");
  const cloneNewDayjsDate = newDayjsdate.add(1, "week");
  return (
    <div>
      <h1>day js</h1>
      <div>Immutable Check</div>
      <div>
        {dayjsDate.format()}
        <br />
        {newDayjsdate.format()}
        <br />
        {cloneNewDayjsDate.format()}
      </div>
      <br />
      <div>Summer Time (New-york)</div>
      <div>{dayjs.tz.guess()}</div>
      <div>
        2018년 3월 10일 13시에 하루 더하기
        {dayjs
          .tz("2018-03-13 13:00:00", "America/New_York")
          .add(1, "day")
          .format()}
      </div>
      <div>
        2018년 3월 10일 24시에 하루 더하기
        {dayjs
          .tz("2018-03-13 13:00:00", "America/New_York")
          .add(24, "hour")
          .format()}
      </div>
      <div>Leap year korea</div>
      <div>
        2017년 1월 1일 1년 빼기:
        {dayjs("2017-01-01").subtract(1, "year").format()}
      </div>
      <br />
      <div>
        2017년 1월 1일 365 빼기:
        {dayjs("2017-01-01").subtract(365, "day").format()}
      </div>
      <br />
      <div>
        한국어로 표기 하기 07-17-2021을 2021 7월 7일로 표기
        {dayjs("07-17-2021").format("YYYY M월 D일")}
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
