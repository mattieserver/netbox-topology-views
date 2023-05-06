import django_tables2 as tables

from netbox.tables import NetBoxTable, ChoiceFieldColumn
from .models import CoordinateGroup, Coordinate

class CoordinateGroupListTable(NetBoxTable):
    name = tables.Column(
        linkify=True
    )

    class Meta(NetBoxTable.Meta):
        model = CoordinateGroup
        fields = ('pk', 'name', 'description')
        default_columns = ('name', 'description')

class CoordinateListTable(NetBoxTable):
    group = tables.Column(
        linkify=True
    )

    device = tables.Column(
        linkify=True
    )

    class Meta(NetBoxTable.Meta):
        model = Coordinate
        fields = ('pk', 'group', 'device', 'x', 'y')
        default_columns = ('id', 'group', 'device', 'x', 'y')
