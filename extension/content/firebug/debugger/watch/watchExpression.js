/* See license.txt for terms of usage */

define([
    "firebug/lib/trace",
    "firebug/lib/object",
    "firebug/debugger/grip/grips",
],
function (FBTrace, Obj, Grips) {

// ********************************************************************************************* //
// Watch Expression

function WatchExpression(expr)
{
    this.expr = expr;

    // The value is set after the expression is evaluated on the back-end.
    this.value = undefined;
}

WatchExpression.prototype = Obj.descend(new Grips.Property(),
{
    getName: function()
    {
        return this.expr;
    }
});

// ********************************************************************************************* //
// Registration

return WatchExpression;

// ********************************************************************************************* //
});
