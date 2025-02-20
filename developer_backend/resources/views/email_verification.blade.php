<x-mail::message>
    # Email Verfication

<x-mail::button :url="''">
Email Verfication
</x-mail::button>

Thanks,<br/>
{{
    config('app.name')
}}
</x-mail::message>