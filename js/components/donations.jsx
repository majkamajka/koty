import React from "react";
import { Router, Route, Link, IndexLink, IndexRoute, hashHistory } from 'react-router';

class Donations extends React.Component {
  render () {
    return (
      <div className="help">
        <h2 className="heading">Jak możesz pomóc?</h2>
        <ol>
          <li>wirtualna adopcja:
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick"/>
              <table>
              <tr><td><input type="hidden" name="on0" value="kwota adopcji"/>kwota adopcji</td></tr><tr><td><select name="os0">
                <option value="Opcja 1">Opcja 1 : 45,00 PLN - co miesiąc</option>
                <option value="Opcja 2">Opcja 2 : 75,00 PLN - co miesiąc</option>
                <option value="Opcja 3">Opcja 3 : 150,00 PLN - co miesiąc</option>
              </select> </td></tr>
              </table>
              <input type="hidden" name="currency_code" value="PLN"/>
              <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
              "/>
            <input type="image" src="www.paypalobjects.com/pl_PL/PL/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal – Płać wygodnie i bezpiecznie" />
              <img alt="" border="0" src="www.paypalobjects.com/pl_PL/i/scr/pixel.gif" width="1" height="1"/>
            </form>
          </li>

          <li>jednorazowa wpłata:
            <form action="www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick"/>
              <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
              "/>
            <input type="image" src="www.paypalobjects.com/pl_PL/PL/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal – Płać wygodnie i bezpiecznie"/>
              <img alt="" border="0" src="www.paypalobjects.com/pl_PL/i/scr/pixel.gif" width="1" height="1"/>
            </form>
          </li>
          <li>
            prawdziwa adopcja:<br/>
            <a href="www.koteria.org.pl/adopcje/adopcje.htm"><button className="button">więcej info</button></a>
            <a href="www.koteria.org.pl/dok/umowa_adop.pdf"><button className="button">umowa adopcyjna</button></a>
          </li>
          <li>
            dom tymczasowy:<br/>
            <a href="www.koteria.org.pl/adopcje/dom-tymczasowy.htm"><button className="button">więcej info</button></a>

          </li>

        </ol>
    </div>
    )
  };
};

export default Donations;
