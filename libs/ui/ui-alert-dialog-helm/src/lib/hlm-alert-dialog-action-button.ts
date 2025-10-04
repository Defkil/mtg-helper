import { Directive } from '@angular/core';
import { HlmButton } from '@mtg-helper/ui/button';

@Directive({
	selector: 'button[hlmAlertDialogAction]',
	hostDirectives: [{ directive: HlmButton, inputs: ['variant', 'size'] }],
})
export class HlmAlertDialogActionButton {}
