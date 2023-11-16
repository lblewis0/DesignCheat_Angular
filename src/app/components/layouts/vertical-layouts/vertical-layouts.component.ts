import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-vertical-layouts',
  standalone: true,
  imports: [CommonModule, MatTooltipModule, MatButtonModule],
  templateUrl: './vertical-layouts.component.html',
  styleUrl: './vertical-layouts.component.scss'
})
export class VerticalLayoutsComponent {

  buttonsCodes : any = {
    "copy-01" : false,
    "copy-02" : false,
  }

  indentLine : any = {
    "line-00" : "",
    "line-01" : "   ",
    "line-02" : "   ",
    "line-03" : "     ",
    "line-04" : "       ",
  }

  toopTipCopy : string = "Copy to clipboard"
 
  getCode(codeIdDiv: string, button: string) : void
  {
      if(!this.buttonsCodes[button])
      {
        this.buttonsCodes[button] = true;
        this.toopTipCopy = "Copied!";

        setTimeout(() => {
          this.buttonsCodes[button] = false;
          this.toopTipCopy = "Copy to clipboard";
        }, 3000);
      }

      const code = document.querySelector(`#${codeIdDiv}`); //div parent
      const spans = code?.children; //span class="line-00" ou "line-01"
      let codelines = [];
      let codeOutput = "";

      if(spans !== undefined && spans.length > 0)
      {
        for(let i = 0; i < spans.length; i++)
        {
          let span00 = spans[i];
          let span00Children = span00?.children;

          if(span00Children !== undefined && span00Children.length > 0)
          {
            for(let t = 0; t < span00Children.length; t++)
            {
              let spanCl = span00Children[t];
              let spanClChildren = spanCl.querySelectorAll('span');
              let codeLine = this.indentLine[span00.classList?.value];
              
              if(spanClChildren != undefined && spanClChildren.length > 0)
              {
                for(let y = 0; y < spanClChildren.length; y++)
                {
                  let span = spanClChildren[y];
                  codeLine = codeLine + span.textContent;
                }

                codelines.push(codeLine);
              } 
            }
          }
        } 
      }

      if(codelines !== undefined && codelines.length > 0)
      {
        for(let i = 0; i < codelines.length; i++)
        {
          codeOutput = codeOutput + codelines[i] + "\n";
        }
      }

      navigator.clipboard.writeText(codeOutput);
      console.log(codeOutput);
      
      
  }

}
