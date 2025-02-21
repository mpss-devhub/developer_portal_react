<x-mail::message>
    # Email Verfication

<x-mail::button :url="$url">
Email Verfication
</x-mail::button>
<p>{{$url}}</p>
Thanks,<br/>
{{
    config('app.name')
}}
</x-mail::message>