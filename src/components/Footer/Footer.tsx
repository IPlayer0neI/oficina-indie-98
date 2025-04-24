import styles from "./index.module.css"

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerApps}>
                <div className={`${styles.app} ${styles.start}`}>
                    <img src="./assets/taskbar-added-images/start.png" />
                    <b>Start</b>
                </div>
                <div className={`${styles.app} ${styles.active}`}>
                    <img src="./icon.png" className={styles.appIcon} />
                    <div className={styles.appText}>
                        Oficina indie
                    </div>
                </div>
                <div className={styles.app}>
                    <img src="./assets/app-icons/taskbar/taskbarexplorer.png" className={styles.appIcon} />
                    <div className={styles.appText}>
                        Internet explorer
                    </div>
                </div>
                <div className={styles.app}>
                    <img src="./assets/app-icons/taskbar/taskbarminesweeper.png" className={styles.appIcon} />
                    <div className={styles.appText}>
                        Minesweeper
                    </div>
                </div>
                <div className={styles.app}>
                    <img src="./assets/app-icons/taskbar/taskbarwinamp.png" className={styles.appIcon} />
                    <div className={styles.appText}>
                        Winamp
                    </div>
                </div>
            </div>
            <div className={styles.tray}>
                <div className={styles.trayItems}>
                    <img src="./assets/taskbar-added-images/task-scheduler.png" className={styles.trayItem} />
                    <img src="./assets/taskbar-added-images/audio-okay.png" className={styles.trayItem} />
                </div>
                <div className={styles.time}>
                    08: 26
                </div>
            </div>
        </div >
    )
}