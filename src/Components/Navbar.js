//import React, { useState } from 'react'
//import { useState } from 'react'
import './Navbar.css'

function Navbar() {

  //let [inputvalue,setinputvalue] =useState("")
 

  return (
    <>
      <div className="navbar">
        <div className="left-navbar">
          <div className="home">
            <a href="/">
              <img
                className="home-img"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFBUYGBcZGhoaGhoaGBodHhkgIRkgGhogHiAaICwjISAqIBkZJDclKS0vNTMzGiI4PjgyPSwzMy8BCwsLDw4PHRISHjIpIykyMjIyMjI0NDUyMjIyMjIyMjIyMjI0MjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EAD8QAAIBAwIEAwYDBgQHAAMAAAECEQADIRIxBEFRYQUicQYTMoGRobHB8BQjQlLR4TNyovEHFWKCkrLCVJPi/8QAGgEAAwEBAQEAAAAAAAAAAAAAAQIDAAQFBv/EACgRAAICAQQCAgEEAwAAAAAAAAABAhEDEiExQQQTIlFhcYGRoRTB8f/aAAwDAQACEQMRAD8A2Nu4Iyh+s/lUhxdvAZTnYERSfC8chO5g8iSKfZxzgjqeXrSONOpIdStbMjpQ7GKHe4RX23FCZSpnSpHUMV/M17Y4y3z1T+ulPofMRXNcMWbgSOxoluxqwRJp9b9tok560fhypeFIJpW5JboKUfsR4fgM4kVaJYGAd/SnEUDpPeoi6e09I/rU3JyGpIX/AGHODRLiEDPLpUjfySVODmI/rQOK8Vt21Z3cKiiSxNFKRrRXPwBeTrMbgEGahf4MAeVGkbnl6xvVJxHt/YJm3w/FuvJ1teRvQFtqg/8AxB4dlh7PEr0m1t9HzXRHI/si4IsDbrglVTe2/h+n47yt0a00fUVceFcXb4lddi4riYMGCDvDBoIPrV1lT7JODR6LdSW1T1kBZBmex/QijqFb4gQeooPJRlArBZrjaq1ThhuT9v6UL3M7A0PaHQV3u642O1Ww8ObB26daPc4Uop1EHpO/yzQ9y6DofZnmt1D3dWD25ofuoIkGKprE0hfCrhQtAMGATpmDyq042wzqARMDOKGly2hxENkgTAMY6CmUnTvpJ5EzA7T+VceR27OiCpUUFzhgNhSN3hydhWlvvb5/71V3XBMYAoRmzSSKR+HIo3DWFnzT3xTl5wBGPvmk7t7ptVLbF2QO/bWd6E1xR8Kj1rnnlUTaMVtjWLXHmhgDnRXtGgulMmEDdfpAFLvjnNFdaCyUbFF3oRFHdaCRRsYjUalXkVrMakXCdwPoKJbusOZA6VY/sqscJpHUH+tenw0H4G+Rj8qr7YdkdM+gw8R1ALyxMYp57VtY0WwSckkyPpNUb8KymCKLw95022qUsS5ixlkfEkWycMklrk55KMCvLVkBjBZW5CBnpSycd/0kTzmipxTThzHyJ/Ganpn2Pqh0WCeJKuwzznf8aHd4922wJ5UJrQJLhs9In8KNwyH4jHoRn7ik+K3ob5PYXZmOdR/D8KyftM/veJ4bhGMo7guP5lVWeD2JRfpW5fhwcyo9ZrA+NQPFuD+e3+S5Ta01sBRae5sPdsAAMDkNvSvFU96fRFYfFnnXvugNjNHWLoE1tzgqCOYZQR8wawLcH+w+LW/dDTZ4gBSo+EMxYaQOzAMOkkDFfTWDER+VYb2zskcb4e8z++tr9XNK53uNGNbGtQRyB9aY4cjUJj5z+VEHCnpUl4ZulFyi+wKLQ5qtHp9KG9xBgD6CK8/Z2PID0xRF4L1qexTcEeJ5CY9f7UF+GLQScehpocL6j7/hU7ywu4lQTnsKGquDVfJlOH8WtXOIu8PbJZ7IUuY8vmnAPURnHPsYsGtkczB+9U3/AAusKOFu3DBuXL9wuSBJgKFGeQkn/uNaq+inAUn0EU6mxXAWsuNOlRnGef2FSa8FBUqD06j1piyqoTgryzJnuYohUNPOO29TnIaKKV21H4aWvpFXD2WJwsChngF5yKCmjOLM+yzXnuGMD6Df8KvGsKBkQOtA98qny/hR1/QuiuRFOEOqIC+oH5ivL9kL3o1y6xpZu9LbH2ELopS4lWTqDS7DtTKYtFa9qhmzT9w0s7U2tgoUuJGDS726bdu1Rdwd1Hyx9tqKkw0JMnahUa72xQfd06ZqN0vEIRBUjvAo9sofheOxkfhXJ4h/0/r5ijLxiHe2ftUvZL6Bpj9k/wBmdtmDDsQaWNj/AGpheKt9GFEHFW+efv8AlRjlmuUCWOL7E/c16LJGafW5aPOPn/WpBE5OvzI/rVPf9iesTtsymZP1NNrxWIKnvmvfdr/Mv/kK42fn6EGg5QlyFKSCJxaAYVvTFYfx66P+bcGwBAnnk/BcrW8U4to1xgYVSx+QmvnXHcdducbwrMAr+9QBQoJVSYIGJI0s2e9I1FcFIuT5Pq1q4kSsKe5FTF8HdtJ6frFKLw5mYaPSje7QGSD6fqKD0mTZQ+1vtO3CG3bt6Wu3crqwoWQsmN8n7Gsh4p4lxV3iuEHEWram3xFkB0OGm4BMHrO/atZ7ZeF2nVOKKEiwDqwDjdT9Z+o6V85fxNblwNatqNN1bgb94zg6lIksSI1IBHU/KpOUtVUXjCOmz7tassd/70VUYZBb50AuNUAmPWjo3cEj1ptROiSuaMGmuXuKJpFMlYGxdx3oRtSCJ3mmXWo6ZHKgzGF/4ZJPDXRMab9z/wBUNa1mjBOKyn/DeRb4pBuOJb/0X+latrXWg5b7holbQbx9f715cuBRvH67VG/dWP6UO5xQ/lmkcrDwAu+IEYAn1/pS1zjnPQdorr7yZpVqdUTbZz3icnNDFwziBUWJ6UNrpFZgthLlxupNKs9ePeNL3HNANk2NAeOtCdj1oLmjRrCuRS7uKg1BZaNGsjdvUrcu0V7VQPDk7CmTSDuKu9eaqaXg3bYD6ipjgerJP+b+1FziFRZp1aiKapV4o0ReKNM4MnaLkV7iqleJPeirdPQ0ulm2LLFeikAzdDRFVqHHZhtmHWoe8HWhpZJ5ijpwo5kUrmkHS2cLiMNLMYODid8dawJf3fG2mDTpv2ROlgdznIHK4K+i27CdB9TWS9vLapc4a4EgC5bkgYxcUiTG5k45welT9ik6RRRpH0Gz4iGxI+sflRLvGhUJkjuYjtmlFCj+EfQUHxJx7q5B0kKTO0QOZBmImuZT+a+rK9EOA49nu3LDy9q5bYqxGAshN4zIdeuxziB8r4S9b4Ti5uMTo94lyFJZSrFekfEkkcxHz27ePL7xQ+q1sQx+J/KR/ENgGtidiYnzbfOvau6LvG8Q4YaWzIIyfdqOUjLb/Ou5uOrYTdRs+seFeP6bps3jjy+6ds6wV1QTMyMiT0yemtsup5R8jFfIfHPGAoW8lm4G8ifvNSLpJ1KHRviMksOXflXg9t+Ks6XW4lxMak9y1sAc9La2APoM1KaT3X8BprY+2qwqc1jfCfaovaQ3V0uRJA5ZxPeI+tHv+0YAnkdsDNKvKitiTW5pXuDrQxcHJhjvVLZ8ftsokDpmq/iPH1tuWOQRsCNwcCB2M1Kfk29h0kJ+wLhH48Hlfn/SR+Vam5dDbA9dq+X+D+Le64jilDf4l1Wnrhtu+Z+tWb+0TAkFoMQYyMSV9NiOu2DS5c+l0ZM2bEdD9Ki23Osbc8ZcaTJDZIE480sc+hWPn1qNz2gvBApBBPlEyPn6QZHUDFIvJTA6NWXUiZ/UT+dANxTzrJW/FroTWWwIMYAHrPPH271AeJhXKsT5gI+EwZzuREjT8qD8qtgVZsPdztQX4ZulZ2z423vAqtyUFT1gas8xkwROAe1Su+0RJ0gGNjnY55ztA39elFeRYaRZ3vKQDgmftQrqwY9PvWZ4/wAYuhiTJOowIzsZxz6/TkaXfjy7qQ2x0xyxsY65j6UfbKrBSNM20iI2FBLco5x6bf1H1qnS9cgZ8h0knUPKSBMGd/L/AKj2NLXPEBuckqDBbBiTkHnOoCCARz2pffN8BpF+FnEbbyf11oLRJHSq1+I1kNqIbzLAP8SqTkdZAPo1C4zxLQFeC2skbqH2nAAgrOqDvJ36hZ8jdGpFi8THeOvOKgEBGoER1+340tevC4EYEw6wSSAFOY/7pnbvvNDFu4rABZVjg8iSYwNjsTHftjLypcM1DJvKGjWNp35RJ+dLcdxSBoaQY+uT/t8q8bhUDgkECDnGIGCpODHlPyIoLMAT5hmDI2MqOqH0wYxQ/wAmT4DRpkazE61iiW79n+cV81fj2+EExNcnFspnV9OWZ+tei5Ta3F0I+lnxCyP4gaYt8daOzCvma8SZBkz+P96Zt8XmcweU9qlJzG0n0teIQ7MKU8X8at8Lb96/mEhQoiWPQT9flWKfjxODGBgbbV54lfS+gW5LBYC5grzOnpJHzpVJvZ7Czxtqky3P/Ey1/wDjP/oH4GoP/wAT0G3Cv/8AsUfgDVJa9m7UEtbfsutgx/pReI8JsKq2vdkvOr92mphkjzuzgmM4qqxxf2RfjR/P8m88M8UXjuFN21KOsgrIJVhup5HEMD0nrVNw3H3A10XbV4hm/dkEHTDHIloyCOu1Zk+F8Rw6XG4e7ctlh5l/wwQAdiCYIE5kVmf2q4AJd89Xb86X1VJNdCxxygmlVP73aPqdnibh8we6rDcGTPyby/SrzwnxVLrLZaReayzkG2wWQsGCcGGO086+GK7NPmY+rGtF7HcQeG4uxdmAS6OTyDK0/PCmkliu99+v1BgThKnLZn0f2h8MtLaXUF/xEVdQz8TXLn3YD/tr5949btrxFvVbZiQ/vFQww/kJxlgA/l7AVs/aHx63dupb4e8GWyoIcaDLsoJYGNwGAkbEtXzLxi97u5cBcuWDSS7HLAgzJzgn611aHVnXrN/wPiy3Co4qbdoqFVn8xuY/dgqmQYBPyHYtohwvDN8Lh+7W9M/+Rn61i/DfD1PB8OYJYH3wIB+OCRMD0FXiHHSvNzZvls39HmZvJWri/wBzVcP4ekDQbB7Bln0Mg0S7wBA81hWH+RW/Cs9wzk7n70wnFhNpB6q0faKyzyoVTi991+4/7iyd7SfLH4UG74dwwhjaJgyAGfft5qzXj3tU1lwiKHciWZycch3JqqT20vsrSERYOwJODHUDlV46pq6X8DRjmkri9jXN7N8Mbj3B7xNYHlDCF8sdCZmGmdwKV4v2YJDe7vBsyA2pOm8EgmRvA9Ky/vPEWypwcj94meeM1WcL4xxl1lCu/mJAJaBIEnJxyoyxKTtpfyWivIX0aV+De3qS4h2LZIgLOdHLBg7z8PQQrwt0F3mdOQJyv8xKjkcExzjHOgkcSNIvXBpLbh9UEeaI54B7b77UzY46bjQhuKxAlSo1lSSsH+GfNnBGox24c2Nxk0uDqgnXy2ZG3xAwpIEnVqBkAGdxmBEdxqruLMsANKNpIBPw5GpoIB2weW/KSarHuMyBpBiYGkjEbFjgg5kk57xTLcTqVAVBUZAIMKQrHDKZgRBmTgZM0vqd2MR4s6DLN5GaFI2BzJQx1xA9ehpy3w0x5SVK7lTz+EEsfi0xnnBiNqS4W67WyqAAIurSCfiAOoEEnUDOrHMASCMWHBcSpyWhCz2wgJxkknP+YkLAIPXNacJcIKQjaYNbBdBIEDOnOMhmPlIggTvPLFeOo935PjUtIIh1IAGrJkwfUd+pPFOHC3LqwzW9wAYLHWrEeZeWt4EA+WaSe95CyPLD4ZUa1Vf4TsGAHTMRIApkn0+xWx23xAZSMLcUzpXc79MHIODEGOVVT3la2o3I1TpAAA/6huPhb6n5j46+5ciSGglCPhcFZWcRIEebb8acuuXRrpkTJAgSIlSZIkrJBk7agMSKqo6K/IUG4ZQVkuVmCCdUDTIbbYaTBziRtio8QdyFJ0jUDGDnzNKsRGBkE5AxSdi4SuifKDq356SOe4yBHTryXscWVDlVVpXTpYzjqB1wP1FFY3bZi4t8WGRkbzCGZRiQVG2knfyr9IFSu8aFS4UIUj4QAcgtqggmIAxO4ztuKc8RoUFsEZWIMSATjeYbeZxtiaION1lFJ31QCWO/xek8sjHM5rendNINblvw3HM9vzKnvEYvJJjCgkDJiZAyf4o50NrCXIYIxEQMTHMgGdpJjbEYpHh76oLcgQh8w1TqDYaO4H/z80ffjYqTBMGBkaiRy6Gl9PaC0uxBetH94SQQANthj1zV6/htofwEzsV1npg4j8a8bw6286dQ2yAY+cj1rs98fob1tFOwON4G1eqxBMfh68uuatH8I2yQIGYMdJEb1x8HjOsHGBkE439Jit7Ym0MrCZ77f3j6/arXwHhFuEs7QqZ36DVk9AKVHhNzkZ5zpaPrp6VbrwtuzaUTLvGo8s9OUZj606lF8AaY9b8QFtbZaCUB7zOASOW32qdt/KTZA94zzPXMn715w3gdtBN2bjHOkHSANwSYJkxMChX1S0feWSRGXQmSsmNQ6rJjaQTzmRCPlQlPQnuUeOSjYxw/h/GkE3b6Nj/DZVg+uBis97TeGe8ZJLC5pMjSSNIySCB1IAk9Birq7wHFXDrt3tAy25yTjlIIxgRigu/EBfd3HWd1dciR1BA9cRXWmRaMAyhXhcgVcJw/vOHuAbqPeD0GW/AD50HjfDEt2xcZxLEhYPIYBPqQcco7077O3VFxVaCreQiRscfjBqWV1v8ARw+Rcakuit4W+WKr5QltDGlVDN5pGpgJY+pxyruC8RPD3muC2rkiAG2Ew07b8vmaCls2rjo3mPmTVJwQc/PEZ61Lj1AcyAQVQnaRjkeW1WqMotPg61LiSPoXgnih4nhmuMqhpdSF2BG3LoRViBBrE+EubKW0XWTcU3LgkhVlfKoAiSVAkzM7Cg3/ABLi0t22/aCpYan16YyxCBfKSRpWSe/avMl4fyelpLo87L48pzcrRvSuJG4+46/rrUQtV/hdvi0j9oa26EfErAMJ2kAAERHpViMVy5IuLo4px0ujH+0NojiGnmqn8R+INUyvFsgCZ1f+xrUe1dkzauDYyh/9l/8Aqs8eGIA5jGeWc846162CV40ez4z1Y0WnB+3Ny0uheHtRAU6tLbCJBKyOfPnVHwPjFy06lQCqszBGjTJBHriZ+QpMW85wCd6gic9oBP8AT74q735Oikani/aW9xK6bltBoAUFUUESGH8IA5Hf5RUDcAti2RkQSRkAaZkAmZzvjaqfgLLNqYZjvHQ/nTiAaTMbE4WBkxuc8j9a58kdT3GSVB+Df3jsGRgSpMDlgy2M4EdZGoxiiqoNwsQ7kCQQugCVnUDOTkYMDIxjAbJQLAYa1gj456Bh5OpGJ/h71G1aX4lMHSp8rQYkA/8AaQTyxiecycd9g0O8PxKrqLdMMARqAILB5mJUQRkiZBzJm19Ft6SLinW4M4CyRPzB5QcMRncV3vtLF4xIJByQdjzj5+u9M2xq1DX/ABao1ZjUNO56YIjr2pXDZAjyA8VuMYZWBERp2ZNK74Pffn0G1LXLywyMG1al5iAYMEM2+ZJnrtRvEIcl0QCTkLAX/V179DVXxTNpgGVOnpIidP01MMYzVMcU0rFlGnYT3jHSp1sRMZBx08vqfrTXBcZc8ysZjbVtkqGEEbkhTA20n1FQsaunWf6R+oonCseWI1c+kk4joPvVnBNAT3Hmvj+HAiOuZJjuJ/CvXtNlo3EiOsfWPTpQFuRlQMcmyPUg4P05VG5eMsdyM5PI4OOm1FQHCPc1EBiJmJJJOd5jeDO0nNelgMiIIic5zuByOCPSoJdZ4O0nGTkfOveIYAAQABIGMDZht/m61tIPyeK3mJJAUgRuSRkqPT8PrR24lRiFJgTqHOOWdqBrUwdIJjqegzv6cqmLw7/LTH4Y9K2kJr1K6ZBKnoZn1lRnl33oOhx8IDZ2ggj05nB6Yr3irSqunSBq1RIB38syO8RMDB5VPg3CgAkTBAkiZzjygx2EztXB1Z1d0z2zbYzoU6h/NgAcydJzRraHRJiDOSScjeJERtiefpT1iz+7yqzBOVUQeWN+m/U1W2bnFlQBwajBMNftgwYBwXBGw2FaEXO6OReXByaSbp1se23ViNOk8pU9TjKn7iufgluX7VtTqtypY9p1NHbJEV7q4snT+z2pyM3dR6HIY4pzwK04ut7zSGFt50nA/dviexBp3cMcn3THWRTapOvyP8TtJwWyf19qR8B8GPE3Wc6mVZXSBAOpYMk8grfMntT3HLHl6D8gatvZjhn9wCu7M5lWg4bTEDGwkHtXh4puKbR25H8TIcRbv2wUT4rZK6Sx0mQQJ6/CcVWJ4sSxt8RbAJEETAbHXcfetP4x4qLfE3FIhlaWBXVv5iMCSMg4HOsZ4txlu6ZTkxjfacHOR6V9Nilqin9nBJUV3iE3XAjQBsIwvWI5RApbw26UuETOlh84pjxAlCySpZoJ0bLiYB575jn6VXcHcKPBkZEgGP1inmrjRzZo6otDvtCQOLumYllbbGVVj+NXfF8FdTizZuXPMYa20sFcsGKSJwCQFjlPpReJ4ThrnFLf/abOkaSbdx8sVAjUScZAkfKn/F+GXjLlorxXCo6fCbbl3xDDEiYIB7ZqWq0l+BYOHrpvethbg7Wq5YhdRCoWDs2AqFieurEZ6CmeHY3nue4Sz7wAQblwqbaadknmCzGYJ2was3VQxuk+UkrIU+aVGBuf4SdudZvxL2bV/dxcOp3VdLgqCdOCCRyE5JE9JgUIRl2q2/UMNSptcBeE8PL6rIW47oqhmV1nUZaNJwoCiJIyeYmK1AmBqBVoGpSRKmMgwSJ9DVA/hvE2Ve5auj3jOQLatJIDkCARJhfN9TVdf8Aus7veuaHY4MqPeMxIgEtk4mI5iuacYze7o4cmNTe7o1l+zbuK1u4xVWGGUairDYxIn61U8f4VYW0FHFgFRH+C8nAE4JHLrVLc8GdfiLjGJkEwPuah4j4T7tRqY6jJ0k5gECfvt2p8b0LSn/Q+JuHxT2/QQfwxRtfDDr7th9iah/y4c7v+n/8AqmeG4S0Gi8zBYxpgmZETqO0T9qhxFqz7w+7MoBMtpnlM6cbz8oq+uX3/AEdSlKrv+iDWhbU+7uFng52A2iIJzTKksrLHxTkDTOSROI2x61VPxbFwUUkidhM9z9BROGujbSC051TP061ZR+zoTkkPqpEkEggAaeXQEGJII274NeJxGQRKnMNPwkEAREQCAv8A470RbjmEby5xqGr1E9Ox7UvxN8KSANjmADnrnNJKDsZSDPk/y6go+pYHvONu9SuwVIJXUsZAgaeZzvuuYnBpK7xha2JOx5gfob1z8R5o7NEdxI27gVtDDqQZLoysRsBiJE7fKT9qr2tnkDE7jIJ7HFTFyck7DrzxUL5XURk7x27T0z9qZRoDdgmtRncb/oUdrgFwgd88xPy2j8qg90xAn5HuPyoJeDPWPyp0gcEiZXnv+dSQgscbyP19qizQNuXp+Fexu08pAzyIB/CiA5bhxiBgDv6/Wp8Q592wjmP1/q+1CuiJ+np1qQueX6T9IoUa9jn+IDkBn6RRtI6ff+9Dt9yec988/rNcGHSe5FYyZteJVCMyTJmGYQTn4RMgCRk/emfDOFAygRCragpJhsknzENDCJ2jqYFSUSdQgER/huNW/NZ2+cmi39Q86SSzIM40rqBuE6jhdCn/AMhXmJnT5G2NstHtmNWnBjIIZdt9Qx12oNzj/dhnH8KuZC4IHuxyg5Lg7501E2lOb1rUuyvbVZjlK8+5AzVU/ATwnFOwgqCLfIog0XGGObEkH/IvSjigr2Z5HjwWrZ9FXxHtewuFwqMAsR5ww2LSxBEGDgTgjNW3sTeW5ctsJCvrQgmfiVrcbCcxXze9bSCdZLchpMfUx+dbP2c8RQ6fdr7vRpgGOgyM/wAwJ65rsyYk8bS7R341Ts+jeI8ASZGJVc9cQfute+zlxkR0gB0ZtwTKNkRByNQI7TV3w7Letq6/xZjof419QZpTi7bW/wB4oUEbkn7CNycD6V8v65wlpr/p261KNMwni6gcXdYg6WbrkCNIE9tJrI+OAC6SuRJWR/FpMGf+qtd4uocXCwkwW9SJJ/OsAzkzkmc+vr33+9fT4Y6YJPpI5JcnjMAdXTbuaSuupbVLSfT+9McRc1HU0AdtvQCkQhYkgYk1cVoLbOpgqgksQAJGSTA5DnW/9jvCDZtniXABeNKnJ05MnJwTpMDlE9vnfDvpYMNxn6Zr614Zw5/dIz64Uu5EgYE6VwMADSPSpZp6IuXSRoQtjKNcLKQq6ROhWIBM8wDg/wC9L30yzvfZHmChOBMkyCIGx35CpvwvvbihuZk/gAPqRTnjfh4Rbdx0LL/hvsdQiUJPaCvzA5V5vj+e5TUX2dGTEorYzfiFwLauErobVNprZJYCQWK5WCZYlQcgHfnV+1PGOx4e2jEjQr4EsWnGtZJJECVzmd6seMS0oAt6AgILqzEaYEkKBsx2wedVyeOG2zt7u2zPPmIXrzOC2c5NehNK1Kjz8uNWnQr7R8Rd4q+dA8lshVIUAhjk7ZDEiQpyAuwzXcVYdrdu7dPlckQASVAaCc4PUbVDi/EGuRruFo2lvy2FIXuI1Ec4ECk6SS4JqL2S6LHxDwu37o3RxCO/lC24IJGQd5IbmZx32qtbhSLYIZVkhZM5x/0g49YrwXlHr8gfxqPEXmUxMbHT16cudUjZR23sh2zYAARDPUj7mDuftXt3htQxMjb16eh/pSdq9/FsR60/wdzVegY1AmPTIPrj71KUXG5J8blseXV8WgNgsUOkzzK5kd/WvLlgMAVmTO85ojW4e4FMEM0ek/r7U14GnvLmnJWGJiZEA9O8D5106/jqHUbdFO9g/LtFCe2cfrtWv4rw26NIVEuyJkGOe5ByIkGBv3pE8GQIuaVE7aR5jIwNYHUf0pVlTC8bRm2SP965p9dv6fWrt+E3EZAJmF2ET8JzE/Y9KWfgvLqEFeud+nP1p1NCuLKeWHLNcFM5EbVYPZjp6ZH4UM2R1Hb9HanTQoqx67bgfr0FSDypI7Db1+1Sfhwd8/P9fSpBCNh9R2j86wDziDqO8fT+Y/lQw4Bweg6/raiEevoFkUB7Z3A+3961BsZ4lNKmDgxBHTEfgaCm2xqVm6NJUk9vqNiOfbn8q8Kd/tWoFn0Hh3LjJJOrEkgxOIjHIH6fJfxa8xa6iytm3ba3qKn95ccqDpkGRgDHITzp6wN2Kj/qjA7zOds0dLisGEB0MSpkqYMjHUHIIzXlqVM7cmPXGiPEe8tPbuXGJsrZM4MjYxG0zAHr8694/wARR/DrrqpCtbc5ictpEwTk4PzqPjPDNfte7Dm2hOo/xKYOBLQRmDHYRtVbxHhV39iNhHDTcUljKhUkNzyfMIijj02m+f8ARy4/GcG5Pmq/Yx3iXhb2ypJt+efKrglYUE6uQ36mrj2dFu3aFxnXU7kaZOoKNKyFjMM045E8xFCX2Nv7/uyp564n6j9TTvD+y9y26MUGGBywKtHmOQo5feut5I1VlVB3wbjwjxN7J8jgholTJU4AB5fXnimPEvGblzcjEmFwBg5zJJ5dqyS3rtlNTqX8xACoxKyZAUDJAEwfSh3/ABbzNbgr+7J1csKd+XepKEJS1JbmdrkX9ofEHtqhQwXVl7FYg/PIPrWX18/wrr3FvdVQ2QCQscixmPnGPQ9DSpYkQBP6/tXSlQjYa2zbhQYBgMJGREweYmR3AoXD2rk6VBz6Hln8KuvCeN90ke5VmM+dlLHtGQBFPr4xcOQgkYA0BRHzknbqKm8jXCGUE+WZtPDXLQiseR1IVIPcAtyzX072XACWrc6iLLCZJBYrqIHYTA9Kxt7ieIu+TS0bxbBH1mdt47DIq79l7ly0yvcLErcnS+4SArfacd+9T8i8mKS7aDFKLtG58M4Yi83KFkGJAkY/Gm/G0U8Pcg6hpDeX4RDhxtgE5zFW/D8MuGUyCBBHNf4T9I+lVftORb4a4cebSvrn+k/avncMZrItu0WnJM+X+NW7aurWgQxGQIEnZTHrGe9ZvjL7altqM7ct+fyqz8d0+8BA+JcxmTLD8qrjwjMoIiJOTy+nIV9Rarc5mrL/AML4Cxo03HV3wxPngDMhcqDgc+tOLc4NMC3aO3mNvVGcnac9fSsynDkKZbOqBnYcyenLfvRBbgZgkbER85PapNW+SqpcJGvt+K2Q3lcID0UqTBkgaR6cjWZ9r+KFy5b0EsqKfNBEljMfKN+5oanYsDG24xn0O8V5xOllIkaoG0Qc5zygdeYrQiouzTblGgS+Hkgsg/dsAQZmJ374ODVp4X4aLZNxjI079tzVT4f4g9qQACszpPI9iMii8b4o9wEBVReYUZPPJ51KePLJ1e33+CcVCO/Yu9yS1zYliT8zMVZezLuXYD4CvmMAxmVzyzH37VR8RcAOkbRWl9m76W7bC40OzAqBAiBH327RXRk2hSNBXLcvrKH4SSQTPLO0dRyOy/Sl77lJkHeBB1ZnI0lhJzgDH1rrhtXAf3imTn4WPSTPKjve8olSREDQIMGdUSSCIkxtiuKUbOhxRWDxAEjRbRj3tDUSTmAMBTHIEZ2p5LPDqmh1ZbgLD4BjCzGpYnA5T0OSCxb4kFxKuCg+ITJ1YGVAz2mOu9K8TwaXNIDFIBwWaSZMAFcbknmcmhx20JoZWDwnSdatrKtgaSsQTIMzkeX/AHqPEWQnmeyzDdjpMsdW4Kqog84J609/y+6CXKM+4ADW55SROeZwDuREYrrXFLbXz2ro0wh2IXmMkH6GDM7TFU9knw7NVdUU902G1bq3ONRA6k569s0iUQ/BcBxMe7YQR9frWlbxG0ASbROowdYEkA/Dy6k8+88vOIuDQUtswRtJIdWkcxIaATGPh6Zqkc1bbk2rM7e8OKCTnqYaD6HTApFrRHI55f3rVrw9xiotnQpIOoLpAIE4AJJ9QOe29Lvxly0Qty5OmMe8EuGEnUZO3wmNiI5VWOVv8iuKMyEkxpye39K73MY0n9fKrbieLt3I/dlRuSIUb47QOZNCPCqCRLyDBADLpPTB/UxyqyyfYrgujZWm5tHfDH0jp6b/AEqa8QIIZWIY5nMz157T+hUAxiDtggySR1yRGdvQn5DmZ3naYBjrn6V5lHePBgVgNJYkQd/Tbl/89akEJw5kCRAgDtkZA350mX2hA8HY+b4hAMSdwPTE0ZbygQLYkczrjecj0/XOhRiw90pY6IXbcEwfxIEc+gqVuwGGbmo5JwyzgAAgfPoMiTtSqlonGeYU7TzjlkZ70MoFOcg9FBj5xg5FA1DTWMyHztjI2j+JcbTXqcIkndgOfvLYn0Ek7mYj+lQS4NIDK2RiTE9cjB/XrUVLKTqY+gjfJ5/WsmYLa4PQpWAyMNpMHkCuhRkeuKWfwWyRJtKCTt7sjO8g4O3KfpyZJLQRM9JWO0jbI9aJ78iASMmYiI3wABnfbtR1MFFe3gdqf8MRnBAEDvJxtOf9/bXBgRotrEkYgbdsc6cNhhmDjcEkR0kR36UoeFSRqfAnBY/f+bajb7CgfEXdUDUQFgczA7bDegXbWsEowZhyOCcwYJwTzwZ6U+nDWxM3AIGoAhuZwc898Y9aifDLbgEXwVyY0EA5x1kz16UydAdDHgntO1pNBGpV2VpUp1HYAzgjlSPj/jj33CvA5KoyBIyfzJ7Uz+w2Gj3hLssCQzBueGOzDHMkxtGanb4W2nwx5gQcmTI2kRj+lC4KWqtyXrZ87fgbtx293bdl1eVgpgiTkH5TV7wfhYtINdtnYGWIYEHMiBO2COvOOVae9cULpnSeRkk7YIHyPp96CbiafKScEiYHyjn+t6eWVyDHGkZlrDGY4ffaSx/W/KmF4Q3PjtaB2YfhBk71fKCwkQOZET9o3/rREIGR16SJn+v50ryDqBnH8BYiF0xyIDAgcwTGf7UNPZ5uZAjkZHpvB/W9aZw0ZWB208hAwD0+dQ/eBT5WWeZUrMfLn+hW9kgeuJnLfs5qYjBg8mHI9Dt8zR39lPKdg3RthvuwxvzIHyq9biHWCYUxkhmH0GJ51G5xWowxzuDMnbOJB5rntzo+yQPUjO3fZLzKpSBAGpWBJMbxnEhvkPnRLHgEW5dgDmAT35wpHykVoLnGahMLnHOTjlPOM/X5Qt8RAHk2GAGMcyCR88450fbI3qRUW/CyvLeOgO+c9JEc/lzsbfBlRkqRk8hGOUc8fYU8niXKByDAoTOY336cs+lQ4nihMsASBPf0JgA5O7fnFI5t8jKFcCV7w1bjAqzjSP4mA1YgY3xmJyNVe/sxVv3cAgb6dROc4OQDjkfwo6cRI3wSJmDEA7TmOfzqd11WBLfEMCDmNhjG+/cUNTDSFibhC6VWQdpaekwc8tl6etATj2b4lBVHgSwGnOTB3EaZAjke9PLMTKgDPPHqRzgnehtwwaYVRO5IG2w3BztnnR27NprgB7q25Li9gnAJhTuI3MSfUb75n33d+3A92rCSZCqZ31EL5YPxfMmhNwJCrBkSQACAvSByByROcTvR+I4qYd0ZsrCLsoAGNQII6zj0mhv0Bq+RQXnWSFugYMFxAOCTMiD9eXoScT4e9xVU6WWCwW5khdZyHUh9iOcZyDml08Yl1AEAkABlkyRJ8xbET0I6zybveI2jBWLcMVAIPmjOBz3AOc/LDVJO6Eaixe77OWkVXMo4JVZaBO4gA4IOO+TGMVPFeDeb/HRd/KznGTIxymd81ob1i65NxStyQZkjJGBCgKYwes433qrL3B8YCsdwbig9MjrimU5rszivosGMDzGRvBgRI+g5gT/McdQ2mZgfJjAJOMRuBGc8pH9erqn0VD39WAJWCCDDHSI6xiY+pr1OPuKBlxMSGESYPc9f6V5XUDHq8QY1uz6gTzOATIzJ5cu9eXL6FfKGI76Ty5TPeurqxj1OJMge7UGfiMREbnmP18injGddAUnMYE579Bnl866urBI27gUMxUMJzkQD0PQTU34livmADAMDEsGhtRJOmIAIG0iM7V1dRAcl0kNGoCctGSIMbgjED5YimHf3kxpDEyMfjO5AG+50xXV1YBxtazlgSBkhJPLeMnPrvE0ZLQgBkcY3wknbmRGDy2j69XUAsneayh06LkQASSIDT1VlB5b8ojc17ct2IOnVONzKxy2aSD+p59XVmBEEupB0pjIlgD9IEidpMzmiPpkFfLvv5QBsCSqnt3M11dQYQF3ilAgspEA6QYIGw3yRB6D1oJ4hEHwAHlj4gB9CR178q6uohOR9TRoBMeULDFgDORAJgTueXKiJpCnTqKb7T1B2MDM+kjrXV1Zg7I6ASVQqrdG1knEnCg8qUe0s6le2TnMsFjvrGncARmurqZcGYW7wjR5tInbTpjr8hkY7fQegKZBkDcDIwM8o2/OurqAyPPfgNEbxsOwOSe425iOtRm35m0BeWIJPpAPOIGdtq9rqxjxHJnzAjaDn5wCDOOR5167HciRAAz1G/wA+5jBrq6sYLrQCWGkcpI/lzuZMSD8vSlxxExokzn1iBg8hv/ac9XUUYaRxgEQIgY77DzbdZgfeuvXgCCExPKIAk5yZ/HceldXUAAHsqfMCynnERn1Bx6f7oXuFt3N5IGFUq2DpnJBkeYliO8V1dTRbBKKC2mvWmt2xpVZI5JIJwduRneSIOcwHOG4m26zrQRiGKyOZ+FtpJr2upqTEP//Z"
                alt="Grapefruit slice atop a pile of other slices"
              />
            </a>
          </div>
          <div className="about">
            <a href="/about">
              <h2>About</h2>
            </a>
          </div>

          <div className="user">
            <a href="/">
              <h2>Guest </h2>
            </a>
          </div>

          <div className="login">
            <a href="/auth">
              <h2>Login</h2>
            </a>
          </div>
        </div>

        <div className="right-navbar">
          <div className="search">
            <label className="site-search">Search the site:</label>
            <input
           
              type="search"
              id="site-search"
              name="q"
             
              
            />

            <button  className="searchbutton">Search</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
