export class Stats {
    constructor(totalClicks: number, totalDeclaraties: number , totalAfgekeurdeDeclaraties: number) {
        this.totalClicks = totalClicks;
        this.totalDeclaraties = totalDeclaraties;
        this.totalAfgekeurdeDeclaraties = totalAfgekeurdeDeclaraties;
    }

    public totalClicks: number;
    public totalDeclaraties: number;
    public totalAfgekeurdeDeclaraties: number;
}