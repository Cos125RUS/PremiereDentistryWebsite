
export type NewsCountResponse = {
    status: "success";
    count: number;
} | {
    status: "failed";
    message: string;
}
