export const errorLogger = (err: boolean, errStatus: number, errData: string) => ({err, errStatus, errData});
export const successLogger = (err: boolean, successStatus: number, successData: any) => ({err, successStatus, successData});