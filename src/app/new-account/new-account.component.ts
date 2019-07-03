import { Component } from "@angular/core";
import { LoggingService } from "../logging.service";
import { AccountsService } from "../accounts.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService]
})
export class NewAccountComponent {
  // This line of code in the constructor is what injects an instance of our logging service component
  // into this component. MUST have the type equal to the name of the service component to be injected.
  // Must also include the providers array above with the service component inside.
  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountsService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChange(accountStatus);
  }
}
