#$1 - browser
CONF="test.conf.js"
echo "Put browser into configuration file"

if [ "$1" == "chrome" ]; then 
 cat $CONF | sed -e "s|<BROWSER>|$1|g" | sed -e "s|<chrome>|$1|g"  > config.js 
 else 
cat $CONF | sed -e "s|<BROWSER>|$1|g"  > config.js 
fi

#workaround to avoid protractor(or selenium bug)
#when firefox target is defined, but chromeOptions is not ignored
#and tests run in Chrome instead of Firefox


webdriver-manager update
webdriver-manager start
protractor config.js > log.txt

popd > /dev/null