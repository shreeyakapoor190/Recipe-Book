import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective
{
//open is the bootstrap class that opens the dropdown
//now we want to add that class when the arrow is clicked
@HostBinding('class.show') isOpen= false;          //to attach or detach a css class

@HostListener('click') toggleOpen(){
    console.log("click")
    this.isOpen= !this.isOpen;

}
}