import React, { useState } from "react";
import { Switch } from "react-native";

const NotiBtn = () => {
    const [isEnable, setIsEnable] = useState(true)
    const toggleSwitch = () => {
        setIsEnable(!isEnable)
    }
    return (
        <Switch
            value={isEnable}
            trackColor={{ false: '#ccc', true: '#0359e3' }}
            thumbColor={isEnable ? '#fff' : '#fff'}
            onValueChange={toggleSwitch}
            style={{
                transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
                width: 50,
                height: 30,
            }}
        >
        </Switch>
    )
}

export default NotiBtn