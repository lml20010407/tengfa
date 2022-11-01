module.exports = obj => {

    return new Promise((res, rej) => {
        wx.showLoading({
            title: '正在拼命加载~',
        })
        wx.request({
            ...obj,
            success(data) {
                res(data)
                wx.hideLoading()
            },
            fail(err) {
                rej(err)
                wx.hideLoading()
            }
        })
    })
}