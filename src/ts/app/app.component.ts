import { Component } from "@angular/core";

@Component({
    selector: "main",
    template: `
        <tool-header header="Color Tool"></tool-header>
        <item-list [items]="colors"></item-list>
        <color-form (onSubmitColor)="addColor($event)"></color-form>
    `,
})
export class AppComponent {

    public header: string = "Color Tool";
    public newColor: string = "";

    public colors: string[] = [
        "red", "white", "green", "blue", "yellow",
    ];

    public addColor(newColor: string) {
        this.colors = this.colors.concat(newColor);
    }
}
