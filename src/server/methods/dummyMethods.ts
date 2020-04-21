import { Request, Response } from 'express';

export const dummyGet = (context: object) => async (req: Request, res: Response) => {
    res.status(200).send('ok');
};

export const dummyPost = (context: object) => async (req: Request, res: Response) => {
    res.status(200).send('ok');
};
