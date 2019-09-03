import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { Router } from "@angular/router";
import { OrderService } from "../Services/order.service";
import { ReturnStatement } from "@angular/compiler";
import { FormGroup, FormControl, Validators } from "@angular/forms";

let date_time;
let variable;
let STATUS;
export class order {
  name: string;
  id: string;
  time: string;
  orderstatus: string;
}

export class OrderList {
  itemName: String;
  pricePerKg: String;
  quantity: String;
  number: string;
  status: string;
}

export class orderdetails {
  OrderList: OrderList[];
  OrderNumber: String;
  OrderStatus: String;
  OrderTime: String;
  phoneNumber: String;
  username: String;
}
@Component({
  selector: "app-admincomponent",
  templateUrl: "./admincomponent.component.html",
  styleUrls: ["./admincomponent.component.css"]
})
export class AdmincomponentComponent implements OnInit {
  selectedDate: any;
  date: any;
  showModal = false;
  order: orderdetails;
  showOutForDeliveryButton = true;
  phonenumber: string;
  currentDate = new Date();
  orderarray: order[] = [];
  orderlist: OrderList[] = [];
  amount = false;
  allorderdetails = true;
  checked = false;
  flag;

  myform = new FormGroup({
    payment: new FormControl("", [Validators.required])
  });

  public MonthfunCalendar() {
    if (Number(date_time.getMonth() + 1) < 10) {
      return "0" + Number(date_time.getMonth() + 1);
    } else return Number(date_time.getMonth() + 1);
  }

  onSelect(event) {
    this.orderarray = [];

    date_time = event;
    console.log(
      date_time.getDate() +
        "-" +
        date_time.getMonth() +
        "-" +
        date_time.getFullYear()
    );
    this.date =
      date_time.getFullYear() +
      "-" +
      this.MonthfunCalendar() +
      "-" +
      date_time.getDate();
    this.orders.getOrderData().subscribe((result: any) => {
      console.log(result);
      for (const i in result) {
        console.log(result[i].username);
        if (result[i].OrderTime.split(" ")[0] == this.date) {
          const ob = new order();

          ob.name = result[i].username;
          ob.id = result[i].OrderNumber;
          ob.time = result[i].OrderTime.split(" ")[1].slice(1, 5);
          ob.orderstatus = result[i].OrderStatus;
          this.orderarray.push(ob);
        }
      }
    });
    this.selectedDate = event;
  }
  constructor(private route: Router, private orders: OrderService) {
    // const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
  }
  public Monthfunc() {
    if (Number(this.currentDate.getMonth() + 1) < 10) {
      return "0" + Number(this.currentDate.getMonth() + 1);
    } else return Number(this.currentDate.getMonth() + 1);
  }
  ngOnInit() {
    this.myfunc();
  }
  private myfunc() {
    this.date =
      this.currentDate.getFullYear() +
      "-" +
      this.Monthfunc() +
      "-" +
      this.currentDate.getDate();

    this.orders.getOrderData().subscribe((result: any) => {
      for (const i in result) {
        if (result[i].OrderStatus == "processing") {
          if (result[i].OrderTime.split(" ")[0] == this.date) {
            const ob = new order();
            ob.name = result[i].username;
            ob.id = result[i].OrderNumber;
            ob.time = result[i].OrderTime.split(" ")[1].slice(1, 5);
            ob.orderstatus = result[i].OrderStatus;
            this.orderarray.push(ob);
          }
        }
      }
    });
  }
  manageVenue() {
    this.route.navigate(["/venue"]);
  }
  request() {
    this.route.navigate(["/requests"]);
  }
  orderDetails(selected: any) {
    this.orderlist = [];
    // this.showOutForDeliveryButton = false;

    this.showModal = true;
    this.showOutForDeliveryButton = true;

    this.orders.getOrderData().subscribe((result: any) => {
      for (const e in result) {
        if (selected.id == result[e].OrderNumber) {
          variable = selected.id;
          for (const i in result[e].OrderList) {
            const ob = new OrderList();

            ob.itemName = result[e].OrderList[i].itemName;
            ob.pricePerKg = result[e].OrderList[i].pricePerKg;
            ob.quantity = result[e].OrderList[i].quantity;
            ob.number = selected.id;
            ob.status = result[e].orderstatus;
            STATUS = result[e].orderstatus;
            this.phonenumber = result[e].phoneNumber;
            this.orderlist.push(ob);
          }
        }
      }
    });
  }
  outfordelivery(element: any) {
    console.log(variable);
    this.orders.getOrderData().subscribe((result: any) => {
      for (const e in result) {
        console.log(result[e].OrderNumber);
        if (variable === result[e].OrderNumber) {
          this.flag = 1;
        } else {
          document.getElementById("amount").style.display = "none";
        }
      }
      if (this.flag == 1) {
        document.getElementById("amount").style.display = "block";
      }
    });

    this.orders.postOrderData(variable).subscribe((result: any) => {
      console.log(result);
    });
  }
  delivery(selected: any) {
    this.orders
      .postPaymentData(variable, { Payment: this.myform.value.payment })
      .subscribe((result: any) => {
        console.log(result);

        this.showOutForDeliveryButton = false;
        document.getElementById("amount").style.display = "none";
      });
  }
}
