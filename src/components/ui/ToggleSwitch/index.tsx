import React from 'react';
import { IToggleSwitchProps } from './interface';
import { Slider, Switch } from './styled';

const ToggleSwitch: React.FC<IToggleSwitchProps> = (props) => {
  const [toggled, setToggled] = React.useState(false);

  return (
    <Switch
      onClick={() => {
        setToggled((checked) => !checked);
        props.onClick();
      }}
    >
      {toggled && <span className="on">C</span>}
      {!toggled && <span className="off">F</span>}
      <Slider style={{ transform: toggled ? ' translateX(28px)' : ' translateX(0px)' }}></Slider>
    </Switch>
  );
};

export default ToggleSwitch;
