(function() {var implementors = {};
implementors["actix"] = [{text:"impl&lt;A:&nbsp;<a class=\"trait\" href=\"actix/prelude/trait.Actor.html\" title=\"trait actix::prelude::Actor\">Actor</a>, M:&nbsp;<a class=\"trait\" href=\"actix/prelude/trait.Message.html\" title=\"trait actix::prelude::Message\">Message</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"actix/struct.Recipient.html\" title=\"struct actix::Recipient\">Recipient</a>&lt;M&gt;&gt; for <a class=\"struct\" href=\"actix/struct.Addr.html\" title=\"struct actix::Addr\">Addr</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"actix/prelude/trait.Handler.html\" title=\"trait actix::prelude::Handler\">Handler</a>&lt;M&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;M::<a class=\"type\" href=\"actix/prelude/trait.Message.html#associatedtype.Result\" title=\"type actix::prelude::Message::Result\">Result</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A::<a class=\"type\" href=\"actix/prelude/trait.Actor.html#associatedtype.Context\" title=\"type actix::prelude::Actor::Context\">Context</a>: <a class=\"trait\" href=\"actix/dev/trait.ToEnvelope.html\" title=\"trait actix::dev::ToEnvelope\">ToEnvelope</a>&lt;A, M&gt;,&nbsp;</span>",synthetic:false,types:["actix::address::Addr"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
