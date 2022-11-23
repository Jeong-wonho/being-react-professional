import React from "react";
import moment from "moment-timezone";

export default function MomentExample() {
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
      <div>두 날짜가 비교</div>
      <div>
        <input type="text" ref="birthDayRef" />
      </div>
    </div>
  );
}
