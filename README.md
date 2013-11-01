# [Red Hat Common User Experience (RCUE)](http://uxd-rcue.rhcloud.com) reference implementation

The Red Hat Common User Experience (RCUE) project was created to promote design commonality across all of Red Hat’s Enterprise product offerings.

This reference implementation of RCUE is based on [Bootstrap v3.0.0](http://getbootstrap.com/); therefore, [Bootstrap v3.0.0](http://getbootstrap.com/) is required in order for it to work properly.

## Development

Development setup requires nodejs. If you do not already have nodejs and npm installed on your system, please see https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager for how to install on your distribution.

After ensuring nodejs and npm are available, install [Bower](http://bower.io/) globally:

    npm install -g bower

Now that bower is available, we can install the required development components:

    bower install

At this point, you should now have a top level components/ folder with all dependencies listed in the bower.json file installed.

## Documentation

See [http://uxd-rcue.rhcloud.com](http://uxd-rcue.rhcloud.com).

