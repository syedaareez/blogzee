# Generated by Django 3.0.3 on 2021-07-28 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_auto_20210728_2211'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='fvrt',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.AlterField(
            model_name='blog',
            name='show',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
    ]