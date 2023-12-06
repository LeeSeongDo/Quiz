import type { Dayjs } from "dayjs";
import React, { useState } from "react";
import { Space, Rate, Calendar, theme } from "antd";
import type { CalendarProps } from "antd";

const desc = ["ㅜㅜ", "별로..", "그냥.. 볼만한 정도", "평타 이상", "명작"];

export default function AntDesignExample(): JSX.Element {
  const [value, setValue] = useState(3);

  const { token } = theme.useToken();
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>["mode"]) => {
    console.log(value.format("YYYY-MM-DD"), mode);
    console.log(value);
  };
  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <>
      <hr />
      <div>
        <h3>1번 문제.</h3>
        <Space>
          <Rate tooltips={desc} onChange={setValue} value={value} />
        </Space>
        {value ? <p style={{ margin: 0 }}>{desc[value - 1]}</p> : ""}
      </div>
      <hr />
      <h3>2번 문제</h3>
      <div style={wrapperStyle}>
        <Calendar fullscreen={false} onPanelChange={onPanelChange} />
      </div>
    </>
  );
}
