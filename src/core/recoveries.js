const RECOVERY_VERSIONS = {
    teamWin: "1",
    orangeFox: "1",
    batik: "1",
    nusantana: "1",
    dark: "1",
    pitchBlack: "1",
    skyHawk: "1",
};

export function getRecoveryVersion(recovery) {
    return recovery in RECOVERY_VERSIONS ? RECOVERY_VERSIONS[recovery] : recovery;
}
