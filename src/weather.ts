import axios from 'axios'
import qs from 'qs'

export const getWeather = () =>
    axios({
        method: 'get',
        url:
            'http://apis.data.go.kr/1360000/VilageFcstInfoService/getUltraSrtFcst',
        params: {
            serviceKey: decodeURIComponent(
                'pFcC6EBXv8O4OYr5mwfyl66SPetzLpwOopC2%2FAGrC3LljdyZV9szcH%2FA3LCzTFkOX289t0GMROtdH5ImRA7%2B%2Bg%3D%3D'
            ),
            pageNo: '1',
            numOfRows: '10',
            dataType: 'JSON',
            base_date: '20210311',
            base_time: '0600',
            nx: '59',
            ny: '125' // 삼성동 좌표
        }
    })
