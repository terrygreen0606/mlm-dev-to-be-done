/*!

=========================================================
* Light Bootstrap Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import BasicSettings from "views/Setup/BasicSettings.jsx";
import CommissionLimit from "views/Setup/CommissionLimit.jsx";
import LevelCommissionSetup from "views/Setup/LevelCommissionSetup.jsx";
import RepurchaseCommissionSetup from "views/Setup/RepurchaseCommission.jsx";
import RewardSetup from "views/Setup/RewardSetup.jsx";
import SmsSetup from "views/Setup/SmsSetup.jsx";
import EmailSetup from "views/Setup/EmailSetup.jsx";
import ReferralCommissionSetup from "views/Setup/ReferralCommissionSetup.jsx";
import PaypalSetup from "views/Setup/PaypalSetup.jsx";
import LanguageSettings from "views/Setup/LanguageSetup.jsx";
import WithdrawalSetup from "views/Setup/WithdrawalSetup.jsx";
import Profile from "views/Profile/Profile.jsx";
import Orders from "views/Orders/Orders.jsx";
import Buttons from "views/Components/Buttons.jsx";
import GridSystem from "views/Components/GridSystem.jsx";
import Panels from "views/Components/Panels.jsx";
import SweetAlert from "views/Components/SweetAlertPage.jsx";
import Notifications from "views/Components/Notifications.jsx";
import Icons from "views/Components/Icons.jsx";
import Typography from "views/Components/Typography.jsx";
import RegularForms from "views/Forms/RegularForms.jsx";
import ExtendedForms from "views/Forms/ExtendedForms.jsx";
import ValidationForms from "views/Forms/ValidationForms.jsx";
import Wizard from "views/Forms/Wizard/Wizard.jsx";
// import RegularTables from "views/Tables/RegularTables.jsx";
// import ExtendedTables from "views/Tables/ExtendedTables.jsx";
// import ReactTables from "views/Tables/ReactTables.jsx";
// import GoogleMaps from "views/Maps/GoogleMaps.jsx";
// import FullScreenMap from "views/Maps/FullScreenMap.jsx";
// import VectorMap from "views/Maps/VectorMap.jsx";
import Charts from "views/Charts.jsx";
// import Calendar from "views/Calendar.jsx";
// import UserPage from "views/Pages/UserPage.jsx";
import LoginPage from "views/Pages/LoginPage.jsx";
import Ewallet from "views/Ewallet/Ewallet";
import Transaction from "views/Ewallet/Transaction";
import WithdrawalOnWardTransaction from "views/Ewallet/WithdrawalOnwardTrans";
import CreditDebit from "views/Ewallet/CreditDebit";
import FundTransfer from "views/Ewallet/FundTransfer";
import TransferHistory from "views/Ewallet/TransferHistory";
import UserEarnings from "views/Ewallet/UserEarnings";
import WithdrawalStaus from "views/Ewallet/WithdrawalStatus";
import GlobalNotices from "views/Notice/GlobalNotices";
import NotificationSystem from "views/Notification/Notifications";
import UserOverview from "views/User/UserOverview";
import BusinessSummary from "views/Business/BusinessSummary";
import BusinessTransactions from "views/Business/BusinessTransaction";
import Epins from "views/Epin/Epins";
import EpinRequests from "views/Epin/EpinRequests";
import EpinAllocation from "views/Epin/EpinAllocation";
import ViewEpin from "views/Epin/ViewEpin";
import EpinTransfer from "views/Epin/EpinTransfer";
import About from "views/CMS/About";
import Contact from "views/CMS/Contact";
import Mission from "views/CMS/Mission";
import Vission from "views/CMS/Vision";
import FAQ from "views/CMS/Faq";
import Genealogy from "views/Downlines/Genealogy";
import Tabular from "views/Downlines/Tabular";
import EpinPackages from "views/Epin/EpinPackages";
import MemberList from "views/MemberManagement/MemberList";
import ChangeMPassword from "views/MemberManagement/ChangeMPassword";
import ChangeMTrsansactionPassword from "views/MemberManagement/ChangeMTransactionPassword";
import PayoutList from "views/Payout/Payoutlist";
import StaffList from "views/Staff/StaffList";
import BandList from "views/Staff/BandList";
import TeamList from "views/Staff/TeamList";
import TicketList from "views/SupportSystem/TicketList";
import TicketCategories from "views/SupportSystem/TicketCategories";
import OpenTickets from "views/SupportSystem/OpenTickets";
import ClosedTickets from "views/SupportSystem/ClosedTickets";
import Blogs from "views/Blogs/Blogs";
import EcommerceStore from "views/Ecommerce/EcommerceStore";
import Bulksms from "views/SMS/Bulksms";
import Bulkemail from "views/Email/Bulkemail";
import EditStaff from "views/Staff/EditStaff";
import AddUpdatePrivileges from "views/Staff/AddUpdatePrivileges";
import RegisterPage from "views/Pages/RegisterPage.jsx";
import PayoutData from "views/Payout/PayoutData";
import Messages from "views/Messages/Messages";
// import LockScreenPage from "views/Pages/LockScreenPage.jsx";

var routes = [
  {
    path: "/dashboard",
    layout: "/admin",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    collapse: true,
    path: "/setup",
    name: "Setup",
    state: "opensetup",
    icon: "pe-7s-settings",
    views: [
      {
        path: "/basic-settings",
        layout: "/admin",
        name: "Basic Settings",
        mini: "BS",
        component: BasicSettings
      },
      {
        path: "/level-commission-limit",
        layout: "/admin",
        name: "Commission Limit",
        mini: "CL",
        component: CommissionLimit
      },
      {
        path: "/level-commission-settings",
        layout: "/admin",
        name: "Level Commission Setup",
        mini: "LC",
        component: LevelCommissionSetup
      },
      {
        path: "/repurchase-commission-settings",
        layout: "/admin",
        name: "Repurchase Commission",
        mini: "RC",
        component: RepurchaseCommissionSetup
      },
      {
        path: "/sms-settings",
        layout: "/admin",
        name: "SMS Setup",
        mini: "SM",
        component: SmsSetup
      },
      {
        path: "/email-settings",
        layout: "/admin",
        name: "Email Setup",
        mini: "@",
        component: EmailSetup
      },
      {
        path: "/referral-commission-settings",
        layout: "/admin",
        name: "Referral Commission",
        mini: "RC",
        component: ReferralCommissionSetup
      },
      {
        path: "/user-reward-settings",
        layout: "/admin",
        name: "User Reward Setup",
        mini: "UR",
        component: RewardSetup
      },
      {
        path: "/paypal-settings",
        layout: "/admin",
        name: "Paypal Setup",
        mini: "PS",
        component: PaypalSetup
      },
      {
        path: "/language-settings",
        layout: "/admin",
        name: "Language Setup",
        mini: "Lan",
        component: LanguageSettings
      },
   /*   {
        path: "/currency-settings",
        layout: "/admin",
        name: "Currency Setup",
        mini: "$",
        component: ValidationForms
      },
      */
      {
        path: "/withdrawal-settings",
        layout: "/admin",
        name: "Withdrawal Setup",
        mini: "WW",
        component: WithdrawalSetup
      },
   /*   {
        path: "/registration-settings",
        layout: "/admin",
        name: "Registration Mode",
        mini: "RM",
        component: ValidationForms
      },
      
      {
        path: "/support-system-settings",
        layout: "/admin",
        name: "Support System Setup",
        mini: "SS",
        component: Wizard
      }
      */

    ]
  },
  {
    collapse:true,
    path: "/cms-settings",
    name: "CMS Settings",
    state: "opencmssettings",
    icon: "pe-7s-print",
    views: [
      {
        path: "/about-us",
        name: "About Us Page",
        layout: "/admin",
        mini: "AU",
        component: About
      },
      {
        path: "/contact-us",
        name: "Contact Us Page",
        layout: "/admin",
        mini: "CU",
        component: Contact
      },
      {
        path: "/faq",
        name: "Freq. Ask Que",
        layout: "/admin",
        mini: "FAQ",
        component: FAQ
      },
      {
        path: "/mission",
        name: "Our Mission",
        layout: "/admin",
        mini: "OM",
        component: Mission
      },
      {
        path: "/vission",
        name: "Our Vission",
        layout: "/admin",
        mini: "OV",
        component: Vission
      }
    ]
  },
  {
    collapse: true,
    path:"/downlines",
    name: "Downlines",
    state: "opendownlines",
    icon: "pe-7s-network",
    views: [
      {
        path: "/genealogy/:userId",
        name: "Genealogy",
        mini: "GE",
        layout: "/admin",
        component: Genealogy

      },
      {
        path: "/tabular",
        name: "Tabular List",
        mini: "TL",
        layout: "/admin",
        component: Tabular

      }
    ]
  },
  {
    path: "/ecommerce-store",
    layout: "/admin",
    name: "eCommerce Store",
    icon: "pe-7s-cart",
    component: EcommerceStore
  },
  {
    path: "/orders",
    layout: "/admin",
    name: "All Orders",
    icon: "pe-7s-albums",
    component: Orders
  },
  {
    collapse: true,
    path: "/ewallet",
    name: "eWallet",
    state: "openwallet",
    icon: "pe-7s-wallet",
    views: [
      {
        path: "/ewallet-summery",
        layout: "/admin",
        name: "eWallet Summery",
        mini: "WS",
        component: Ewallet
      },
      {
        path: "/transactions",
        layout: "/admin",
        name: "Transactions",
        mini: "TR",
        component: Transaction
      },
      {
        path: "/withdrawal-and-onwards-funds",
        layout: "/admin",
        name: "Withdrawal & Onward Transactions",
        mini: "WOT",
        component: WithdrawalOnWardTransaction
      },
      {
        path: "/withdrawal-status",
        layout: "/admin",
        name: "Withdrawal Status",
        mini: "WS",
        component: WithdrawalStaus
      },
      {
        path: "/credit-debit",
        layout: "/admin",
        name: "Credit/Debit",
        mini: "CD",
        component: CreditDebit
      },
      {
        path: "/fund-transfer",
        layout: "/admin",
        name: "Fund Transfer",
        mini: "FT",
        component: FundTransfer
      },
      {
        path: "/transfer-history",
        layout: "/admin",
        name: "Transfer History",
        mini: "TH",
        component: TransferHistory
      },
      {
        path: "/user-earnings",
        layout: "/admin",
        name: "User Earnings",
        mini: "UE",
        component: UserEarnings
      }
    ]
  },
  {
    path: "/g-notices",
    name: "Global Notices",
    icon: "pe-7s-volume",
    layout: "/admin",
    component: GlobalNotices
  },
  {
    path: "/notification-system",
    name: "Notification System",
    icon: "pe-7s-bell",
    layout: "/admin",
    component: NotificationSystem
  },
 /* {
    path: "/user-overview",
    name: "User Overview",
    icon: "pe-7s-user",
    layout: "/admin",
    component: UserOverview
  }, */
  {
    collapse: true,
    path: "/business",
    name: "Business",
    state: "openbusiness",
    icon: "pe-7s-diamond",
    views: [
      {
        path: "/business-summery",
        layout: "/admin",
        name: "Business Summary",
        mini: "BS",
        component: BusinessSummary
      },
      {
        path: "/business-transactions",
        layout: "/admin",
        name: "Business Transactions",
        mini: "BT",
        component: BusinessTransactions
      }
    ]
  },
  {
    collapse: true,
    path: "/epin",
    name: "ePIN",
    state: "openepin",
    icon: "pe-7s-pin",
    views: [
      {
        path: "/epin-packages",
        layout: "/admin",
        name: "Epin Packages",
        mini: "EP",
        component: EpinPackages
      },
      {
        path: "/generate-epin",
        layout: "/admin",
        name: "Epins",
        mini: "GE",
        component: Epins
      },
      {
        path: "/epin-requests",
        layout: "/admin",
        name: "Epin Requests",
        mini: "ER",
        component: EpinRequests
      },
      {
        path: "/epin-allocation",
        layout: "/admin",
        name: "PIN Allocation",
        mini: "PA",
        component: EpinAllocation
      },
      {
        path: "/view-epin",
        layout: "/admin",
        name: "View Epin",
        mini: "VE",
        component: ViewEpin
      },
      // {
      //   path: "/epin-transfer",
      //   layout: "/admin",
      //   name: "E-PIN Transfer",
      //   mini: "ET",
      //   component: EpinTransfer
      // }
    ]
  },
  {
    collapse: true,
    path: "/member-management",
    name: "Member Management",
    state: "openmembers",
    icon: "pe-7s-users",
    views: [
    /*  {
        path: "/profile-view",
        layout: "/admin",
        name: "Profile View",
        mini: "PV",
        component: Buttons
      }, */
      {
        path: "/list-members",
        layout: "/admin",
        name: "Member List",
        mini: "SM",
        component: MemberList
      },
      {
        path: "/change-user-password",
        layout: "/admin",
        name: "Change Login Password",
        mini: "CP",
        component: ChangeMPassword
      },
   /*   {
        path: "/change-user-status",
        layout: "/admin",
        name: "Block/Unblock User",
        mini: "BU",
        component: SweetAlert
      },
      {
        path: "/change-wallet-access",
        layout: "/admin",
        name: "Wallet Access",
        mini: "WA",
        component: Notifications
      },
      */
      // {
      //   path: "/change-transaction-password",
      //   name: "Change Transaction Password",
      //   layout: "/admin",
      //   mini: "TP",
      //   component: ChangeMTrsansactionPassword
      // },
   /*   {
        path: "/kyc-details",
        layout: "/admin",
        name: "KYC Details",
        mini: "KYC",
        component: Icons
      } */
    ]
  },
 /* {
    collapse: true,
    path: "/payouts",
    name: "Payout",
    state: "openpayout",
    icon: "pe-7s-anchor",
    views: [
      {
        path: "/manually-release",
        layout: "/admin",
        name: "Manually Release",
        mini: "MR",
        component: Buttons
      },
      {
        path: "/by-request",
        layout: "/admin",
        name: "By Request",
        mini: "BR",
        component: GridSystem
      }
    ]
  },
  */
 {
  path: "/payout",
  name: "Payout List",
  icon: "pe-7s-anchor",
  layout: "/admin",
  component: PayoutList
},
{
  path: "/payouts/:payoutID",
  layout: "/admin",
  name: "Payout Data",
  component: PayoutData,
  invisible: true
},
  {
    path: "/messages",
    name: "Messages",
    icon: "pe-7s-mail",
    layout: "/admin",
    component: Messages
  },
  {
    path: "/bulk-sms",
    name: "Bulk SMS",
    icon: "pe-7s-mail-open",
    layout: "/admin",
    component: Bulksms
  },
  {
    path: "/bulk-email",
    name: "Bulk Email",
    icon: "pe-7s-mail-open-file",
    layout: "/admin",
    component: Bulkemail
  },
  {
    collapse: true,
    path: "/staff",
    name: "Staff",
    state: "openstaff",
    icon: "pe-7s-user-female",
    views: [
      {
        path: "/bands",
        layout: "/admin",
        name: "Bands",
        mini: "B",
        component: BandList
      },
      {
        path: "/teams",
        layout: "/admin",
        name: "Teams",
        mini: "T",
        component: TeamList
      },
      {
        path: "/staff-members",
        layout: "/admin",
        name: "Staff Members",
        mini: "SM",
        component: StaffList
      }
    ]
  },
  {
    collapse: true,
    path: "/support-system",
    name: "Support System",
    state: "opensupportsystem",
    icon: "pe-7s-headphones",
    views: [
      {
        path: "/support-tickets",
        layout: "/admin",
        name: "All Tickets",
        mini: "ST",
        component: TicketList
      },
      {
        path: "/ticket-categories",
        layout: "/admin",
        name: "Ticket Categories",
        mini: "TC",
        component: TicketCategories
      },
      {
        path: "/open-tickets",
        layout: "/admin",
        name: "Open Tickets",
        mini: "OT",
        component: OpenTickets
      },
      {
        path: "/closed-tickets",
        layout: "/admin",
        name: "Closed/Resolved Tickets",
        mini: "CT",
        component: ClosedTickets
      }
    ]
  },
 /* {
    path: "/activity-history",
    name: "Activity History",
    icon: "pe-7s-albums",
    layout: "/admin",
    component: Buttons
  }, */
  {
    collapse: true,
    path: "/blogs",
    name: "Blogs",
    state: "openblog",
    icon: "pe-7s-pen",
    views: [
      {
        path: "/blog-list",
        layout: "/admin",
        name: "Blog List",
        mini: "BL",
        component: Blogs
      },
    /*  {
        path: "/pending-approval",
        layout: "/admin",
        name: "Pending for Approval",
        mini: "PA",
        component: GridSystem
      } */
    ]
  },
  {
    collapse: true,
    path: "/report",
    name: "Report",
    state: "openreport",
    icon: "pe-7s-copy-file",
    views: [
      {
        path: "/joinings-report",
        layout: "/admin",
        name: "Joinings",
        mini: "J",
        component: Buttons
      },
      {
        path: "/active-deactive-users-report",
        layout: "/admin",
        name: "Active/Deactive Users",
        mini: "GS",
        component: GridSystem
      },
      {
        path: "/free-paid-users-report",
        layout: "/admin",
        name: "Free/Paid Users Report",
        mini: "P",
        component: Panels
      },
      {
        path: "/monthwise-revanue",
        layout: "/admin",
        name: "Monthwise revanue",
        mini: "MR",
        component: SweetAlert
      },
      {
        path: "/transactions",
        layout: "/admin",
        name: "transactions",
        mini: "TR",
        component: Notifications
      },
      {
        path: "/failed-transactions",
        layout: "/admin",
        name: "Failed Transactions",
        mini: "FT",
        component: Icons
      },
      {
        path: "/pin-history-report",
        layout: "/admin",
        name: "PIN History",
        mini: "PH",
        component: Typography
      },
      {
        path: "/user-activity-report",
        layout: "/admin",
        name: "User Activity Report",
        mini: "UA",
        component: Typography
      },
      {
        path: "/user-earning-report",
        layout: "/admin",
        name: "User Earning Report",
        mini: "UE",
        component: Typography
      },
      {
        path: "/top-earner-report",
        layout: "/admin",
        name: "Top Earner Report",
        mini: "TE",
        component: ValidationForms
      },
      {
        path: "/payout-released-report",
        layout: "/admin",
        name: "Payout Released Report",
        mini: "PR",
        component: RegularForms
      },
      {
        path: "/user-wise-sms-log-report",
        layout: "/admin",
        name: "Userwise SMS Log Report",
        mini: "TE",
        component: ExtendedForms
      }
    ]
  },
  {
    path: "/login",
    layout: "/auth",
    component: LoginPage
  },
  {
    path: "/register",
    layout: "/auth",
    name: "Register",
    mini: "RP",
    component: RegisterPage
  },
  {
    path: "/profile",
    layout: "/admin",
    name: "Profile",
    component: Profile,
    invisible: true
  },
  {
    path: "/edit-staff/:userId",
    layout: "/admin",
    name: "Update Staff",
    component: EditStaff,
    invisible: true
  },
  {
    path: "/add-staff/",
    layout: "/admin",
    name: "Add Staff",
    component: EditStaff,
    invisible: true
  },
  {
    path: "/add-update-privileges/:userId",
    layout: "/admin",
    name: "Privileges for Stafff Member",
    component: AddUpdatePrivileges,
    invisible: true
  }
  
];
export default routes;
