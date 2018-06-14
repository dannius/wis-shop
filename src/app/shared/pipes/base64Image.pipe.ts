import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'base64Image'
})
export class Base64ImagePipe implements PipeTransform {
  constructor(
    private sanitizer: DomSanitizer,
  ) {}

  transform(base64: any): any {
    return this.sanitizer.bypassSecurityTrustUrl(base64);
  }

}
