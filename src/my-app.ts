
export class MyApp {

    close() {
        Neutralino.app.exit(() => {

        }, () => { });
    }

    public showSettings(): void {
        Neutralino.settings.getSettings((data) => {
            alert(JSON.stringify(data));
        }, () => {

        });
    }
}
