import * as storeRepository from '../data/store.js'

export async function get_store(req, res) {
    const data = await storeRepository.getData();
    res.status(200).json(data);
}