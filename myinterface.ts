//interface is a contract that defines the properties and methods that a class must implement
interface UserDetails {
  readonly dbId?: number;
  email: string;
  userId: number;
  googleID?: string;

  //   startTrial: () => string;
  startTrial(): string;
  getCoupon(couponName:string): number;
}

//re-opening the interface
interface UserDetails {
    githubId: string;
}

//inheritencr of interface
 interface AdminDetails extends UserDetails {}

const user1: UserDetails = {
  dbId: 22,
  email: "shivesh@gmail.com",
  userId: 2211,
  startTrial: () => {
    return "Trial Started";
  },
  getCoupon: (couponName: "100C") => {
    return 100;
  },
  githubId: "shivesh1000"
};
