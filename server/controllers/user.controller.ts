export {}

const {
    test
} = require('../services/user.service')

const handleTest = async (req: any, res: any) => {
    try {
        const testing = await test()
        
        return res.json(testing)
    } catch (error: any) {
        return res.status(400).json(error)
    }
}

module.exports = {
    handleTest
}