const DEVICE_NAMES = {
    U50A_ATT: "5041C",
    simba6_cricket: "6060C",
    U50A_PLUS_TF: "A502DL",
    U50A_PLUS_ATT: "5059D",
};

export function getDeviceName(device) {
    return device in DEVICE_NAMES ? DEVICE_NAMES[device] : device;
}
