import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BookPage = () => (
  <Layout>
    <SEO title="Best Man Speech Book" />
    <img src="https://images.unsplash.com/photo-1498429152472-9a433d9ddf3b?ixlib
    =rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=960" alt="Speech" />
    <p>This book is full of jokes, story ideas, tips, guidelines, and many more
    sample speeches and more info on how to carry out your best man duties
    flawlessly. For the low cost of $5, you will instantly receive a copy of this book
    in your email.
    </p>
    <div class="pp-form">
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="SN3VUDN2FGNT6" />
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
        <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="2" height="2" />
      </form>
    </div>


  </Layout>
)

export default BookPage
