import { Request, Response } from 'express';

export const dummyGet = async (req: Request, res: Response) => {
    res.status(200).send('ok');
};

export const dummyPost = async (req: Request, res: Response) => {
    res.status(200).send('ok');
};
