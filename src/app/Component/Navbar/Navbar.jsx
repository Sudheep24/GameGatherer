import React from 'react'
import './navbar.css'
import Link from  'next/link'


export default function Navbar() {
  return (
    <div className='nav'>

        <img src="https://lh3.googleusercontent.com/pw/ABLVV87Ffru81S-NrI3vRwj6cEi8aB4kQ_42XEZMyENPVJCm1ixhz5BLzk2TBwmNSYthh677uKgzqrz_YGAPfKisyWo-vtFv0Gk8t6B7hsiGfKRZMv5K7jFfl5tQDFffmeed7Q1fF7HuwwGXYTaAZ05HhQUlsjDthdUEKSeH0RHApkOuK764v2N9t5T8cU6it53TFJBvmlm4eEH-rnadMtN_pCVJLJpKAP2RrbtpKgd9PEBc4tryMqa-H-B5-RGYqiMnSJQQKigVCZC2jj2pxLbEZaPHgBcEmwbOYZWhRuf-jfoBZC-k8lPd-qtzK7hnx3E2uiGo4vCXbrM92Q7cQ3ZPRhaKoRdxYP7_PdoKvc35tCFwcK7DYuaz5wuJtxyMr5EVqALQiCGxSpCY7w1cn4ma0P-MXqLGjlDjmlvL5G8WzVlxwN4UFLPnv_yTz1rJ_k6LvSVsTWNsmHX01BFDOzXVpWLRaOTFCe9bCvhPVZzGHNKaVQiwIHTiRL-ertrmnbYsOZW8oKZglLqDX4zrUF4UMpSIF4squCtNo3AAORLLuGczUza76LSEwLW5obZdJtkgJeZe2bm5GTnCYHSQltNqMtOl17RWZ4-0s3lOqzqxWzCgDzhKwr8Q9xjmrKBfvo5uwbADfhCrpz87QZSH0QOP63vG0r8jOBvuSPpAc2XfJM3XeNqqI3InfxIcpPHOLdSV-LPDtbogJA4HknT3t7jdh0qzAs0Umrv9IWx84Mve-akQebkEmzal_7O7wN_3N39KmY1QTxcGmDXSJlhB-URt-hiaoYhR6dfhN2NaBJCTF564kkXhuyRjFEfXxEijF8O_zSrxD-SBmC9XFT14XUEOA0fsm8xueSIhQYhT4rZt3CnTrZv0LIW-eBlksQTpaywRW8ZYw4L_8DyT4w658Z7r_-jmJO-gtBy7nMCZfq1-9hCajBnbd5h6neXbzMbQrMZKe4dhDI_6Eq_YICs=w500-h500-s-no-gm?authuser=0" alt="" />

        <Link href='/'>
            <button>Home</button>
        </Link>
        <Link href='/Events'>
            <button>Events</button>
        </Link>
    
    </div>
  )
}
